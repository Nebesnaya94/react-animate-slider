import React from "react";
import DatesSlider from "./dates/DatesSlider";
import Circle from "./circle/Circle";
import { useClick } from "../helpers/useClick";
import { datesList } from "../data/sliderData";
import InfoSlider from "./slider/InfoSlider";
import DateCounterLabel from "./dates/DateCounterLabel";
import ArrowMin from "../../assets/images/vector-min.svg";
import DateCounterMin from "./dates/DateCounterMin";
import { CountContext } from "../helpers/createContext";

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  useClick();

  function increment() {
    if (currentIndex < datesList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function decrement() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <CountContext.Provider
      value={{ currentIndex, setCurrentIndex, increment, decrement }}
    >
      <div className="wrapper">
        <div className="line line_x"></div>
        <div className="line line_y"></div>
        <Circle />
        <DatesSlider />
        <InfoSlider />
        <div className="counter-wrapper">
          <DateCounterLabel prefix="outer" icon={ArrowMin} />
          <DateCounterMin />
        </div>
      </div>
    </CountContext.Provider>
  );
};

export default App;
