import React from "react";
import DateCounter from "./DateCounter";
import { TDates } from "../../data/models";
import DateCounterLabel from "./DateCounterLabel";
import ArrowCounter from "../../../assets/images/vector-count.svg";

export interface IDateSliderProps {
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
        <div>Исторические</div>
        <div>даты</div>
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
      <DateCounterLabel
        datesList={datesList}
        dateIndex={dateIndex}
        increment={increment}
        decrement={decrement}
        prefix="inner"
        icon={ArrowCounter}
      />
    </div>
  );
};

export default DatesSlider;
