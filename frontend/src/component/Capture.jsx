import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { FiCameraOff, FiCamera } from "react-icons/fi";

function WebcamImage({setBase64String, setSelectedFile, imgnumber, handleCap }) {
  const [img, setImg] = useState(null);
  const [isCaptureOn, setIsCaptureOn] = useState(false);
  const webcamRef = useRef(null);

  const base64ToFile = (base64Image, fileName)=>{
        // Split the Base64 string to get the content type and the data
        var base64Parts = base64Image.split(',');
        var contentType = base64Parts[0].split(':')[1].split(';')[0];
        var base64Data = base64Parts[1];
    
        // Decode the Base64 data
        var byteCharacters = atob(base64Data);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
    
        // Create a Blob object
        var blob = new Blob([byteArray], { type: contentType });
    
        // Create a File object from the Blob
        var file = new File([blob], fileName, { type: contentType });
    
        return file;
  }

  const videoConstraints = {
    width: 320,
    height: 320,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setBase64String(imageSrc)
    var fileName = "image.jpg";
    var file = base64ToFile(imageSrc, fileName);
    setSelectedFile(file)
    setImg(imageSrc);
    handleCap(imageSrc)
  }, [webcamRef]);

  const handleCaptureOn = () => {
    setIsCaptureOn(!isCaptureOn);
  };

  return (
    <div
      
    >
      {img === null ? (
        isCaptureOn ? (
          <>
          <div className="flex flex-col items-center ">
              <div className="mt-4 border-1 border-blue-400 rounded-md shadow-md shadow-gray-600 w-[310px] h-[310px] items-center">
                <div className="ml-1 mt-1">
                  <Webcam
                    audio={false}
                    mirrored={true}
                    height={300}
                    width={300}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  />
                </div>
      
              </div>

              <div className="flex items-center mt-8 gap-16">
                  <button
                    className=" overflow-hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                    onClick={handleCaptureOn}
                  >
                    <FiCamera size={28}/>
                  </button>
                  <button
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                    onClick={capture}
                  >
                    Capture
                  </button>
              </div>

            </div>
          </>
        ) : (
          <>
          <div className="flex flex-col items-center">
            <div className="h-[310px] w-[310px] mt-4 border-1 border-blue-400 rounded-md shadow-md shadow-gray-600 bg-black text-white flex items-center justify-center text-xl">
                Capturing is Off
            </div>
            <button
              className="mt-6  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              onClick={() => setImg(null)}
            >
              <FiCameraOff size={28} onClick={handleCaptureOn} />
            </button>
          </div>
          </>
        )
      ) : (
        <>
        <div className="flex flex-col items-center">
          <div className="mt-4 border-1 border-blue-400 rounded-md shadow-md shadow-gray-600 w-[310px] h-[310px]">
          <div className="ml-1 mt-1">
            <img src={img} alt="screenshot" />
            </div>
          </div>
          <button
            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            onClick={() => setImg(null)}
          >
            Retake
          </button>
        </div>
        </>
      )}
    </div>
  );
}

export default WebcamImage;
