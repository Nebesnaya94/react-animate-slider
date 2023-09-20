import React from "react";
import DatesSlider from "./dates/DatesSlider";
import Circle from "./circle/Circle";
import { useClick } from "../helpers/useClick";
import { datesList } from "../data/sliderData";
import InfoSlider from "./slider/InfoSlider";

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
    <div className="wrapper">
      <div className="line line_x"></div>
      <div className="line line_y"></div>
      <Circle index={currentIndex} setIndex={setCurrentIndex} />
      <DatesSlider
        datesList={datesList}
        dateIndex={currentIndex}
        increment={increment}
        decrement={decrement}
      />
      <InfoSlider dataIndex={currentIndex} />
    </div>
  );
};

export default App;
