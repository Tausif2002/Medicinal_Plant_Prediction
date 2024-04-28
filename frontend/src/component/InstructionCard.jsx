// InstructionCard.js

import React from 'react';

const InstructionCard = ({ index, text }) => (
  <div className=" bg-white shadow-lg rounded-md overflow-auto my-4">
    <div className="px-4 py-0">
      <h5 className="font-bold text-xl mb-2">Instruction {index + 1}</h5>
      <p className="text-gray-700 text-base">{text}</p>
    </div>
  </div>
);

export default InstructionCard;
