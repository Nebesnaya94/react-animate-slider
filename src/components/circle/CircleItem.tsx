import gsap from "gsap";
import React from "react";
import { infoList } from "../../data/sliderData";

interface ICircleItemProps {
  setIndex: (value: number) => void;
  currentIndex: number;
  itemIndex: number;
}

const CircleItem: React.FC<ICircleItemProps> = ({
  setIndex,
  currentIndex,
  itemIndex,
}) => {
  return (
    <div className="circle__dot">
      <div className="circle__item">
        <button
          onClick={() => setIndex(itemIndex)}
          className={`circle__button${
            currentIndex === itemIndex ? " " + "active" : ""
          }`}
        >
          {itemIndex + 1}
        </button>
        <div
          className={`circle__text${
            currentIndex === itemIndex ? " " + "active" : ""
          }`}
        >
          {infoList[itemIndex].title}
        </div>
      </div>
    </div>
  );
};

export default CircleItem;
