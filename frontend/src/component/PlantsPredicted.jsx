import React, { useEffect, useRef } from 'react'
// import PlantCard from './PlantCard'
import "./resultPage.css"
// import imageUrl from './../Assets/hero_2.jpg'
import plantImgData from './../data/plantImages.json'
import name_mapping from './../data/name_mapping.json'
import {toast, Toaster} from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const uploadImage = async (img)=>{
  let imgURL = null;

  

  await axios.get('http://localhost:5300/api/get-upload-url').then(async ({data:{uploadURL}})=>{

      await axios({
          method : "PUT",
          url :uploadURL,
          headers : {'Content-Type' : 'multipart/form-data'},
          data : img
      }).then(()=>{
          imgURL=uploadURL.split('?')[0]
      })
  })

  return imgURL
}
 
export default function PlantsPredicted({name, setPlantName, flag, setFlag, confidence, smallImgUrl}) {

  let imageUrl

  const navigate = useNavigate();

  let uplodedImgRef =useRef();


 Object.keys(name_mapping).map(name_sci=>{
    if(name_sci===name){
      console.log(name_mapping[name_sci])
      name = name_mapping[name_sci]
      setFlag(true)
      setPlantName(name)
      
    }

    return null

  })

  if(!flag){
    name='Not a medicinal plant'
    confidence=null
  }

  

  console.log(name)


  

  plantImgData.plants.map((plant, index) => {
    
    if(plant.name===name){
      imageUrl=plant.images[0]
      return null
    }
      return null
    }
  )

  const handleSubmit = async (e)=>{

    e.preventDefault();
    if (name && smallImgUrl && confidence) {

      e.target.setAttribute("disabled", true)

      uploadImage(smallImgUrl)
      .then(url=>{

          axios.post('http://localhost:5300/api/update-plant-image', {url, name, confidence})
          .then(({data:{plant_img}})=>{
              
              // toast.dismiss(loadingToast)
              e.target.removeAttribute("disabled")
              toast.success("Successfully shared with community")
              setTimeout(()=>{
                navigate('/community')

              }, 1500)
          })
          .catch(({response})=>{
              e.target.removeAttribute("disabled")
              // toast.dismiss(loadingToast)
              toast.error(response.data.error)
          })

      })
      .catch(err=>{
        e.target.removeAttribute("disabled")
          console.log(err)
      })

    }
      // setLoading(true);
      
  }

  useEffect(()=>{

    uplodedImgRef.current.src = URL.createObjectURL(smallImgUrl)
 }, [])


  return (
    <>
    <Toaster/>
   <div className="mt-16">
   <div className="relative bg-opacity-50 bg-cover bg-black bg-no-repeat bg-center lg:h-[95vh] md:h-[500px] sm:h-[350px] w-full m-auto mt-16"
   >

      <img src={imageUrl} className='absolute opacity-50 object-cover h-[95vh] lg:h-[95vh] md:h-[500px] sm:h-[350px] w-full' alt='' />
     

      <div className="absolute top-8 left-8 p-2">
          <img
            ref={uplodedImgRef}
            src={smallImgUrl}
            alt="Small Plant Icon"
            className="w-64 h-64 rounded-full max-lg:w-32 max-lg:h-32"
          />
        </div>
     

      {/* Content goes here */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">{
        console.log(name)
      }
        <h1 className="text-4xl md:text-6xl font-bold">{name}</h1>
        <p className={`block font-bold ${confidence===null?'hidden':''}`}>Accuracy : {confidence}%</p>
      </div>
    </div>

    </div>
    <div className={`m-auto w-full max-w-full ${confidence===null?'hidden':''}`}>
      <div className="slant-1 text-black">
      <div class="container text-center">
      <button
              type='submit'
              onClick={handleSubmit}
              className='text-cyan-50 bg-black hover:!bg-black/85 font-medium rounded-md text-sm w-full sm:w-auto mt-3 px-5 py-2.5 text-center'>
              {'Share with the community'}
              </button>
      </div>
      </div>  
    </div>
    {/* <div className='-mt-16 z-30'>
    <h1 className='text-center '>Informations</h1>
    </div> */}

     </>
  )
}
