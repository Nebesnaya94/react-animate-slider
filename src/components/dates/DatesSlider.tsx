import React from "react";
import DateCounter from "./DateCounter";
import { TDates } from "../../types/models";
import ArrowIcon from "../../../assets/images/vector.png";

interface IDateSliderProps {
  dateIndex: number;
  increment: () => void;
  decrement: () => void;
  datesList: TDates[];
}

const DatesSlider: React.FC<IDateSliderProps> = ({
  datesList,
  dateIndex,
  increment,
  decrement,
}) => {
  const currentDates = datesList[dateIndex];

  return (
    <div className="counter">
      <h1 className="counter__title">
        <span>
          Исторические <br /> даты
        </span>
      </h1>
      <div className="counter__container">
        <div className="counter__dates">
          <div className="counter__date counter__date_prev">
            <DateCounter diff={currentDates[0]} initial={datesList[0][0]} />
          </div>
          <div className="counter__date counter__date_next">
            <DateCounter diff={currentDates[1]} initial={datesList[0][1]} />
          </div>
        </div>
      </div>
      <div className="counter__label">
        <div className="counter__label-text">
          0{dateIndex + 1}/0{datesList.length}
        </div>
        <div className="counter__buttons">
          <button
            className="counter__button counter__button_prev"
            onClick={decrement}
            disabled={dateIndex <= 0}
          >
            <img src={ArrowIcon} alt="arrow-next" />
          </button>
          <button
            className="counter__button counter__button_next"
            onClick={increment}
            disabled={dateIndex >= datesList.length - 1}
          >
            <img src={ArrowIcon} alt="arrow-next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatesSlider;
