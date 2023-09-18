import React from "react";
import CircleItem from "./CircleItem";

interface ICircleProps {
  index: number;
  setIndex: (value: number) => void;
}

const Circle: React.FC<ICircleProps> = ({ index, setIndex }) => {
  return (
    <div className="circle">
      <div className="circle__container">
        <CircleItem setIndex={setIndex} currentIndex={index} itemIndex={0} />
        <CircleItem setIndex={setIndex} currentIndex={index} itemIndex={1} />
        <CircleItem setIndex={setIndex} currentIndex={index} itemIndex={2} />
      </div>
    </div>
  );
};

export default Circle;
