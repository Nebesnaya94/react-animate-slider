import React from "react";
import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { infoList } from "../../data/sliderData";
import gsap from "gsap";
import SliderArrow from "../../../assets/images/vector-slider.svg";

import "swiper/css";
import "swiper/css/navigation";

interface IInfoSliderProps {
  dataIndex: number;
}

const InfoSlider: React.FC<IInfoSliderProps> = ({ dataIndex }) => {
  const swiperRef = React.useRef<SwiperRef>(null);
  const [isStart, setIsStart] = React.useState<boolean>(true);
  const [isEnd, setIsEnd] = React.useState<boolean>(true);

  const visibleSlides: number =
    window.innerWidth >= 1440
      ? 3
      : window.innerWidth >= 1200
      ? 2.5
      : window.innerWidth >= 992
      ? 2
      : 1.5;

  const slideSpace: number = window.innerWidth >= 576 ? 80 : 25;

  function goToFirstSlide() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
    }
  }

  function slideBack() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  function slideForward() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
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
    setIsStart(swiperRef.current?.swiper.isBeginning);
    setIsEnd(swiperRef.current?.swiper.isEnd);
  }, [dataIndex]);

  return (
    <span className="slider">
      <button
        className="slider__button slider__button_prev"
        onClick={slideBack}
        disabled={isStart}
      >
        <img src={SliderArrow} alt="arrow-prev" />
      </button>
      <Swiper
        ref={swiperRef}
        modules={[Scrollbar, A11y]}
        spaceBetween={slideSpace}
        slidesPerView={visibleSlides}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          setIsStart(swiperRef.current?.swiper.isBeginning);
          setIsEnd(swiperRef.current?.swiper.isEnd);
        }}
        onMouseDown={() => false}
      >
        {infoList[dataIndex]?.items.map((item, index) => (
          <SwiperSlide
            className="slider__item slide"
            key={index}
            style={{
              paddingRight:
                window.innerWidth >= 576 ||
                index !== infoList[dataIndex]?.items.length - 1
                  ? 0
                  : "40px",
            }}
          >
            <h2 className="slide__title">{item?.date}</h2>
            <p className="slide__text">{item?.info}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="slider__button slider__button_next"
        onClick={slideForward}
        disabled={isEnd}
      >
        <img src={SliderArrow} alt="arrow-next" />
      </button>
    </span>
  );
};

export default InfoSlider;
