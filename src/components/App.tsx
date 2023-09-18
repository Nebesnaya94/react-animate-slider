import React from "react";
import DateCounter from "./DateCounter";
import { TDates } from "../types/models";
import ArrowIcon from "../../assets/images/vector.png";

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

  const currentDates = datesList[currentIndex];

  return (
    <div className="wrapper">
      <div className="line line_x"></div>
      <div className="line line_y"></div>
      <div className="circle">
        <div className="circle__container">
          <div className="circle__dot circle__dot_1">
            <button
              onClick={() => setCurrentIndex(0)}
              className={`circle__button ${currentIndex === 0 ? "active" : ""}`}
            >
              1
            </button>
          </div>
          <div className="circle__dot circle__dot_2">
            <button
              onClick={() => setCurrentIndex(1)}
              className={`circle__button ${currentIndex === 1 ? "active" : ""}`}
            >
              2
            </button>
          </div>
          <div className="circle__dot circle__dot_3">
            <button
              onClick={() => setCurrentIndex(2)}
              className={`circle__button ${currentIndex === 2 ? "active" : ""}`}
            >
              3
            </button>
          </div>
        </div>
      </div>
      <div className="animations">
        <h1 className="animations__title">
          <span>
            Исторические <br /> даты
          </span>
        </h1>
        <div className="animations__container">
          <div className="animations__dates">
            <div className="animations__date animations__date_prev">
              <DateCounter
                diff={currentDates[0]}
                initial={datesList[0][0]}
                action={decrement}
              />
            </div>
            <div className="animations__date animations__date_next">
              <DateCounter
                diff={currentDates[1]}
                initial={datesList[0][1]}
                action={increment}
              />
            </div>
          </div>
        </div>
        <div className="animations__counter">
          <div className="animations__counter-label">
            0{currentIndex + 1}/0{datesList.length}
          </div>
          <div className="animations__buttons">
            <button
              className="animations__button animations__button_prev"
              onClick={decrement}
              disabled={currentIndex <= 0}
            >
              <img src={ArrowIcon} alt="arrow-next" />
            </button>
            <button
              className="animations__button animations__button_next"
              onClick={increment}
              disabled={currentIndex >= datesList.length - 1}
            >
              <img src={ArrowIcon} alt="arrow-next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
