// InstructionList.js

import React from "react";
import InstructionCard from "./InstructionCard";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const InstructionList = () => {
  const instructions = [
    "Choose clear image from your computer or device",
    "Ensure good lighting and minimal background noise for accurate predictions",
    "Ensure images are relevant to the prediction task for accurate results.",
  ];

  return (
    <>
      <div className="mt-6">
        {instructions.map((instruction, index) => (
          <InstructionCard key={index} index={index} text={instruction} />
        ))}
      </div>
      <div className="flex items-center justify-center space-x-20">
        <div className="flex flex-col items-center">
          <img
            src="/alovera_right.jpg" // Replace with the actual path to your first image
            alt="Image 1"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
          
          <MdOutlineDoneOutline className="" color="#00df9a" size={48} />
    
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/alovera_wrong.jpg" // Replace with the actual path to your second image
            alt="Image 2"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
          <RxCross2 className="" color="red" size={44}/>
        </div>
      </div>
    </>
  );
};

export default InstructionList;
