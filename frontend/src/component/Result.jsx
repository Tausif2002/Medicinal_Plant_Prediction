import React, { useEffect, useRef, useState } from 'react'
import Navbar from './NavaBar'
import PlantsPredicted from './PlantsPredicted'
import PlantInfo from './PlantInfo'
import PlantInfoVert from './PlantInfoVert'

export default function Result({is_plant, name,confidence, smallImgUrl}) {

  const [flag, setFlag] = useState(false)
  const [plantName, setPlantName] = useState(name)
  let uplodedImgRef =useRef()

//   useEffect(()=>{

//     uplodedImgRef.current.src = URL.createObjectURL(smallImgUrl)
//  }, [])

  return (

    <div className={`w-[80%] m-auto ${is_plant?'shadow-md':''}`}>

          {
            !is_plant?
            <>
            <h1 className='flex justify-center items-center h-[70vh] shadow-none'>Not a plant, Please Upload Proper Image of Plant</h1>
            
            </>
            :
            <>
              <PlantsPredicted flag={flag} setFlag={setFlag} setPlantName={setPlantName}  name = {plantName}  confidence={confidence} smallImgUrl={smallImgUrl}/>
              <div className='w-full mt-24'>
            
              {/* <PlantInfo name={name}/> */}

              {/* {console.log(accuracy)} */}
              <div className={`${!flag?'hidden':''}`}>

                  <PlantInfoVert  name={plantName}/>

              </div>
  
              </div>
            </>
          }
        
           

          

          
          
        

    </div>

  )
}
