import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SliderContent from "./SliderContent";
import "./MainSlider.css";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";

export default function MainSlider() {

  const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];
  

  return (
    <>
      <Swiper
        navigation={true}
        loop={true}

        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <SliderContent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}