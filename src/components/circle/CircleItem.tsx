import React from "react";
import { infoList } from "../../data/sliderData";
import { CountContext } from "../../helpers/createContext";

interface ICircleItemProps {
  key: number;
}

const CircleItem: React.FC<ICircleItemProps> = ({ key }) => {
  const { currentIndex, setCurrentIndex } = React.useContext(CountContext);

  return (
    <div className="circle__dot">
      <div className="circle__item">
        <button
          onClick={() => setCurrentIndex(key)}
          className={`circle__button${
            currentIndex === key ? " " + "active" : ""
          }`}
        >
          {key + 1}
        </button>
        <div
          className={`circle__text${
            currentIndex === key ? " " + "active" : ""
          }`}
        >
          {infoList[key].title}
        </div>
      </div>
    </div>
  );
};

export default CircleItem;
