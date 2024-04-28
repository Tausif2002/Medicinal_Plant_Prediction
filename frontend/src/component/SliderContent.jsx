/* eslint-disable react/prop-types */
import img2 from "../Assets/singleleaf1.png";
import img3 from "../Assets/singleleaf2.png";
import img4 from "../Assets/singleleaf3.png";
import "./SliderContent.css";

const SliderContent = ({ item }) => {
  return (
    <div className="relative">

      <img src={item.img} alt="" className="h-screen w-screen overflow-hidden" />
      
      <h1 className="text-[70px] font-[900] text-white text-opacity-[60%] mr-32 text-content">
        <span className="text-u absolute mr-16">PLANT</span>
        <span className="text-r absolute mr-14">PRED</span>
        <span className="text-e absolute">ICTION</span>
        {/* <span className="text-e absolute">N</span>
        <span className="text-e absolute">T</span> */}
      </h1>

      {/* Leaf One */}
      <div className="leaf leaf-one">
        <img
          src={img2}
          alt=""
          className="w-[112px] h-[83px] rotate-[-20deg]"
        />
      </div>

      {/* Leaf Two */}
      <div className="leaf leaf-two">
        <img src={img4} alt="" className="w-[70px] h-[52px]" />
      </div>

      {/* Leaf Three */}
      <div className="leaf leaf-three">
        <img src={img3} alt="" className="w-[70px] h-[52px]" />
      </div>
    </div>
  );
};

export default SliderContent;