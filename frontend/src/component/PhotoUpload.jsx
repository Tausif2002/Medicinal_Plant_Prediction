import React, { useState, useRef } from "react";
import Navbar from "./NavaBar";
import data from './../data/plantData.json'
import previewImg from 'C:\\Users\\TOUSIF\\Downloads\\Medicinal-Plant-Detection-main\\Medicinal-Plant-Detection-main\\frontend\\src\\Assets\\previewImg.jpg'

const PhotoUpload = ({setBase64String, setSelectedFile}) => {

  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const photoInputRef = useRef(null);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    setSelectedFile(file);

    setPhotoName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = reader.result;
      setBase64String(result)
      setPhotoPreview(e.target.result);
      setIsPhotoSelected(true);
    };
    reader.readAsDataURL(file);
  };



  const handleSelectPhotoClick = () => {
    if (photoInputRef.current) {
      photoInputRef.current.click();
    }
  };




  const isSubmitDisabled = !(isPhotoSelected);

  return (

  
          <div className="w-[320px] h-[320px] border-3 border-blue-400 py-8 rounded-lg shadow-md shadow-gray-600 mr-0 mt-6">
            <input
              type="file"
              className="hidden"
              ref={photoInputRef}
              onChange={handlePhotoChange}
            />

            <label
              className="block text-gray-700 text-lg font-bold mb-4 text-center"
              htmlFor="photo"
            >
               "Plant Image 1"
              <span className="text-red-600"> </span>
            </label>

            <div className="text-center">
              <div
                className="mt-2"
              >
                <img
                  src={photoPreview || 'http://giphygifs.s3.amazonaws.com/media/G5ZzaFMyDNoPu/giphy.gif'}
                  className="w-40 h-40 m-auto rounded-full shadow border-s-blue-400"
                  alt="Plant 1"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-[#00df9a] border-gray-300 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-4 ml-3"
                onClick={handleSelectPhotoClick}
              >
                Select New Photo
              </button>
            </div>
          </div>

         
         /* <div className="flex justify-center text-center">
            <div className="ml-[180px] mt-8">
          <button
            type="button"
            className={`block px-4 py-2 ${
              isSubmitDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#00df9a]"
            } text-white rounded-md font-semibold text-xs uppercase tracking-widest shadow-sm hover:bg-[#00df9a] focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition ease-in-out duration-150 ml-[-40px]`}
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
          </div>
        </div>  */
      /* </div> */
  );
};

export default PhotoUpload;
