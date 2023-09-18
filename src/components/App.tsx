import React from "react";
import { TDates } from "../types/models";
import DatesSlider from "./dates/DatesSlider";
import Circle from "./circle/Circle";

const App: React.FC = () => {
  const datesList: TDates[] = [
    [2000, 2009],
    [2010, 2019],
    [2020, 2023],
  ];

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

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
    </div>
  );
};

export default App;
