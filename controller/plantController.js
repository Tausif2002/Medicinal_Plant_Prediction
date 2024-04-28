import plantFeatures from "../models/plantModel.js";
import fs from "fs";
import csv from "csvtojson";
import feedbackModel from "../models/feedbackModel.js";
import aws from 'aws-sdk';
import nanoid from 'nanoid-esm';




// setting S3 bucket



const s3= new aws.S3({
  region :'ap-south-1',
  apiVersion: 'latest',
  accessKeyId:process.env.AWS_ACCESS_KEY_ID  ,
  secretAccessKey :process.env.AWS_SECRET_ACCESS_KEY

})

const generateUploadURL= async ()=>{
  const date= Date.now();
  console.log(process.env.AWS_SECRET_ACCESS_KEY)
  const imageName= `${nanoid()}-${date.getTime}.jpeg`
  console.log(imageName)
  return await s3.getSignedUrlPromise('putObject', {
      Bucket : 'blogging-web-mern',
      Key : imageName,
      Expires :1000,
      ContentType : "image/jpeg"
  })
}

export const uploadAWSURLGenrator=(req, res)=>{
  generateUploadURL().then((url)=>{
      res.status(200).json({uploadURL:url})
  }).catch((err)=>{
      res.status(500).json({error:err.message})
  })
}

export const updatePlantImage = (req, res) =>{

  let {url, name, confidence} = req.body;

  plantFeatures.create({"localName":name, "accuracy":confidence, "photo": url})
  .then((data)=>{
      return res.status(200).json(data)
  })
  .catch(err=>{
      return res.status(500).json({error: err.message})
  })
}

export const getResult = (req, res)=>{
  plantFeatures.find()
  .then((data)=>{
    return res.status(200).json(data)
  })
  .catch(err=>{
    console.log(err)
    return res.status(500).json({"error": err.message})
  })
}
