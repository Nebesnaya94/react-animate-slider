import React from "react";
import { IDateCounterProps } from "../circle/Circle";
import { datesList } from "../../data/sliderData";

const DateCounterMin: React.FC<IDateCounterProps> = ({ index, setIndex }) => {
  return (
    <div className="counter-min">
      {datesList.map((_, i) => (
        <div
          key={i}
          onClick={() => setIndex(i)}
          className={`counter-min__dot${i === index ? " " + "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default DateCounterMin;
