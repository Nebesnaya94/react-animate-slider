import React from "react";
import { infoList } from "../../data/sliderData";
import { CountContext } from "../../helpers/createContext";

interface ICircleItemProps {
  index: number;
}

const CircleItem: React.FC<ICircleItemProps> = ({ index }) => {
  const { currentIndex, setCurrentIndex, totalCount } =
    React.useContext(CountContext);

  const angleStep = 360 / totalCount;

  return (
    <div
      style={{
        transform: `rotate(${angleStep * index}deg) translate(265px) rotate(-${
          angleStep * index
        }deg)`,
      }}
      className="circle__dot"
    >
      <div className="circle__item">
        <div
          onClick={() => setCurrentIndex(index)}
          className="circle__button-wrapper"
        >
          <button
            className={`circle__button${
              currentIndex === index ? " " + "active" : ""
            }`}
          >
            {index + 1}
          </button>
        </div>
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
