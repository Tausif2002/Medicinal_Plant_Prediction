import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import data from "./../data/plantData.json";
// import dotenv from "dotenv";
import PhotoUpload from "./PhotoUpload";
import Instructions from "./Instructions";
import WebcamImage from "./Capture";
import constants from './../utils/constants.json'

// dotenv.config();

export default function Upload({selectedFile, setSelectedFile, prediction, setPrediction, base64String,setBase64String}) {
  const [isCam, SetisCam] = useState(false);
  const [image, setImage] = useState(null);
  // const [selectedFile, setSelectedFile] = useState(null)
  // const [prediction, setPrediction] = useState(null)
  const navigate = useNavigate();

  const handleSwitch = () => {
    SetisCam(!isCam);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setImage(e.target.files[0])
    // if(!image){
    //   console.log("no image selected")
    //   return
    // }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();

        setPrediction(result);
        navigate('/result')
        
      } else {
        console.error('Error predicting image:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


 const handleSubmit2 = async ()=>{
      // testing purpose api call

    var myHeaders = new Headers();
    myHeaders.append(constants.namea, constants.namea_value);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "images": [
        base64String
      ],
      // "latitude": 49.207,
      // "longitude": 16.608,
      "similar_images": true
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(constants.url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.result.is_plant.binary)
        setPrediction({
          'is_plant': result.result.is_plant.binary,
          'class' : result.result.classification.suggestions[0].name,
          'confidence': Math.round(result.result.classification.suggestions[0].probability*100,2)
        })
        setTimeout(()=>{

          navigate('/result')
        }, 2000)
      })
      .catch(error => console.log('error', error));
 }

  function handleCapture(img) {
    console.log(img);
    // setImages([...images, img]);
  }

  return (
    <>
    {console.log(prediction)}

    {
   
  
      <div className="flex items-center w-[80%] mx-auto gap-8 top-0">
        <div className="flex flex-col items-center justify-center ml-16 mr-8 min-w-[350px]">
          {/* <div className="flex justify-center items-center"> */}
            <button
              className= "text-center mt-0  rounded-xl border-2 border-green-500 px-5 py-3 text-base font-medium text-black transition duration-200 hover:bg-green-600/5 "
              onClick={handleSwitch}
            >
              Switch
            </button>
          {/* </div> */}

          {isCam ? (
         
                <WebcamImage setBase64String={setBase64String} setSelectedFile={setSelectedFile} imgnumber={"Image"} handleCap={handleCapture} />      
          
          ) : (
            <PhotoUpload setBase64String={setBase64String} setSelectedFile={setSelectedFile}/>
          )}

            <button
              className= "text-center mt-8  rounded-xl border-2 border-green-500 px-5 py-3 text-base font-medium text-black transition duration-200 hover:bg-green-600/5 "
              onClick={handleSubmit2}
            >
              Submit
            </button>
        </div>
        <div className="flex flex-col gap-4 mr-0">
          <Instructions />
        </div>
      </div>


  }
    </>
  );
}
