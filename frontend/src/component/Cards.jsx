import React from 'react'
// import { download } from '../assets'
// import {downloadImage} from '../utiles'
const Cards = ({_id, photo, localName, accuracy}) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img className='w-full h-auto object-contain rounded-xl'
      src={photo} alt={prompt} />
      {console.log(photo)}
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f]/80 m-2 p-4 rounded-md'>
      {/* <p className='text-white text-sm overflow-y-auto prompt'>{accuracy}</p> */}
     
      <div className='flex flex-col items-center text-white '>
        <div className='items-center text-2xl font-bold'>
          <p className='px-1'>
          {localName}
          </p>
        </div>
        <p className= 'text-xl'>
          {accuracy} %
        </p>
      </div>
       
      </div>
    </div>
    
  )

}
export default Cards