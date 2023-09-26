import React from "react";
import { infoList } from "../../data/sliderData";
import { CountContext } from "../../helpers/createContext";

interface ICircleItemProps {
  index: number;
}

const CircleItem: React.FC<ICircleItemProps> = ({ index }) => {
  const { currentIndex, setCurrentIndex } = React.useContext(CountContext);

  return (
    <div className="circle__dot">
      <div className="circle__item">
        <button
          onClick={() => setCurrentIndex(index)}
          className={`circle__button${
            currentIndex === index ? " " + "active" : ""
          }`}
        >
          {index + 1}
        </button>
        <div
          className={`circle__text${
            currentIndex === index ? " " + "active" : ""
          }`}
        >
          {infoList[index].title}
        </div>
      </div>
    </div>
  );
};

export default CircleItem;
