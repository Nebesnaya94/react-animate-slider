import React from "react";

interface ICircleItemProps {
  setIndex: (value: number) => void;
  currentIndex: number;
  itemIndex: number;
}

const CircleItem: React.FC<ICircleItemProps> = ({
  setIndex,
  currentIndex,
  itemIndex,
}) => {
  return (
    <div className={`circle__dot circle__dot_${itemIndex + 1}`}>
      <button
        onClick={() => setIndex(itemIndex)}
        className={`circle__button ${
          currentIndex === itemIndex ? "active" : ""
        }`}
      >
        {itemIndex + 1}
      </button>
    </div>
  );
};

export default CircleItem;
