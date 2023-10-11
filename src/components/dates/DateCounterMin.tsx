import React from "react";
import { datesList } from "../../data/sliderData";
import { CountContext } from "../../helpers/createContext";

const DateCounterMin: React.FC = () => {
  const { currentIndex, setCurrentIndex } = React.useContext(CountContext);

  return (
    <div className="counter-min">
      {datesList.map((_, i) => (
        <div
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`counter-min__dot${
            i === currentIndex ? " " + "active" : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default DateCounterMin;
