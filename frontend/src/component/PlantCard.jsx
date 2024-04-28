import React, { useEffect, useRef } from 'react';
import plantImgData from './../data/plantImages.json'

const PlantCard = ({ name,  smallImageUrl, confidence }) => {

  let imageUrl

  let uplodedImgRef =useRef()

  plantImgData.plants.map((plant, index) => {
    
    if(plant.name===name){
      imageUrl=plant.images[0]
      return null
    }
      return null
    }
  )


 useEffect(()=>{

    uplodedImgRef.current.src = URL.createObjectURL(smallImageUrl)

 }, [])




//   {plantImgData.plants.map((plant, index) => {

// return plant.name===name && 
//  Object.keys(plant).map((key, index) => {
//   return (
//     <div key={index}>
//       <Accordion title={key} content={plant[key]} />
//     </div>
//   );
// });
// })}

  return (
    <div className="card border-2 border-black !bg-black w-full md:w-1/2 lg:w-1/2 xl:w-[28%] p-4  text-white shadow-md ml-0">
      <div className="relative ">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 p-2">
          <img
            ref={uplodedImgRef}
            src={smallImageUrl}
            alt="Small Plant Icon"
            className="w-32 h-32 rounded-full"
          />
        </div>
       
      </div>
      <div className="p-4 flex justify-between">
        <div className="text-xl font-semibold mb-2">{name}</div>
        <div className="text-xl font-semibold mb-2">{confidence}%</div>
      </div>
    </div>
  );
};

export default PlantCard;
