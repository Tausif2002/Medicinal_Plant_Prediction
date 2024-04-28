import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="w-[95%] max-w-md mx-auto mb-4">
        <div
          className={`bg-white shadow-md rounded-md overflow-hidden transition-all ${
            isOpen ? 'max-h-screen' : 'max-h-12'
          } flex flex-col`}
        >
          <div
            className="p-2 cursor-pointer flex items-center justify-between"
            onClick={toggleAccordion}
          >
            <h2 className="block m-auto text-xl font-semibold">{title}</h2>
            <div className='text-2xl'>{isOpen ? '-' : '+'}</div>
         
          </div>
          <div className="p-4 flex-grow block mx-auto">{content}</div>
        </div>
      </div>
    );
  };
export default Accordion