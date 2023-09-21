import React from "react";
import { IDateSliderProps } from "./DatesSlider";

interface ILabelProps extends IDateSliderProps {
  prefix: string;
  icon: string;
}

const DateCounterLabel: React.FC<ILabelProps> = ({
  datesList,
  dateIndex,
  increment,
  decrement,
  prefix,
  icon,
}) => {
  return (
    <div className={`${prefix}-label`}>
      <div className={`${prefix}-label__text`}>
        0{dateIndex + 1}/0{datesList.length}
      </div>
      <div className={`${prefix}-label__buttons`}>
        <button
          className={`${prefix}-label__button ${prefix}-label__button_prev`}
          onClick={decrement}
          disabled={dateIndex <= 0}
        >
          <img src={icon} alt="arrow-next" />
        </button>
        <button
          className={`${prefix}-label__button ${prefix}-label__button_next`}
          onClick={increment}
          disabled={dateIndex >= datesList.length - 1}
        >
          <img src={icon} alt="arrow-next" />
        </button>
      </div>
    </div>
  );
};

export default DateCounterLabel;
