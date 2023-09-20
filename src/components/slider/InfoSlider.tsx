import React from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { infoList } from "../../data/sliderData";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";

interface IInfoSliderProps {
  dataIndex: number;
}

const InfoSlider: React.FC<IInfoSliderProps> = ({ dataIndex }) => {
  const swiperRef = React.useRef(null);

  function goToFirstSlide() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
    }
  }

  function appear() {
    gsap.fromTo(
      ".swiper",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, ease: "expo.inOut" }
    );
  }

  React.useEffect(() => {
    appear();
    goToFirstSlide();
  }, [dataIndex]);

  return (
    <span>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
      >
        {infoList[dataIndex]?.items.map((item, index) => (
          <SwiperSlide className="slide" onMouseDown={() => false} key={index}>
            <h2 className="slide__title">{item?.date}</h2>
            <p className="slide__text">{item?.info}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </span>
  );
};

export default InfoSlider;
