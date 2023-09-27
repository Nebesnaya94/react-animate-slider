import React from "react";
import { CountContext } from "../../helpers/createContext";

interface ILabelProps {
  prefix: string;
  icon: string;
}

const DateCounterLabel: React.FC<ILabelProps> = ({ prefix, icon }) => {
  const { currentIndex, increment, decrement, totalCount } =
    React.useContext(CountContext);

  return (
    <div className={`${prefix}-label`}>
      <div className={`${prefix}-label__text`}>
        0{currentIndex + 1}/0{totalCount}
      </div>
      <div className={`${prefix}-label__buttons`}>
        <button
          className={`${prefix}-label__button ${prefix}-label__button_prev`}
          onClick={decrement}
          disabled={currentIndex <= 0}
        >
          <img src={icon} alt="arrow-next" />
        </button>
        <button
          className={`${prefix}-label__button ${prefix}-label__button_next`}
          onClick={increment}
          disabled={currentIndex >= totalCount - 1}
        >
          <img src={icon} alt="arrow-next" />
        </button>
      </div>
    </div>
  );
};

export default DateCounterLabel;
