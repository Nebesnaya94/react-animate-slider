import React from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { infoList } from "../../data/sliderData";

import "swiper/css";
import "swiper/css/navigation";

interface IInfoSliderProps {
  dataIndex: number;
}

const InfoSlider: React.FC<IInfoSliderProps> = ({ dataIndex }) => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3.5}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {infoList[dataIndex].items.map((item, index) => (
        <SwiperSlide key={index}>
          <h2>{item.date}</h2>
          <p>{item.info}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InfoSlider;
