import React from "react";
import CircleItem from "./CircleItem";
import gsap from "gsap";
import { disposeCircleItems } from "../../helpers/disposeCircleItems";
import { datesList } from "../../data/sliderData";

interface ICircleProps {
  index: number;
  setIndex: (value: number) => void;
}

const Circle: React.FC<ICircleProps> = ({ index, setIndex }) => {
  const [isRotating, setIsRotating] = React.useState<boolean>(false);
  const [currentRotation, setCurrentRotation] = React.useState<number>(0);
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const [prevIndex, setPrevIndex] = React.useState<number>(0);

  React.useEffect(() => {
    disposeCircleItems(datesList.length);
  }, []);

  function rotate() {
    if (isRotating || !hasMounted) return;

    const newRotation =
      index > prevIndex
        ? currentRotation +
          (360 - (index - prevIndex) * (360 / datesList.length))
        : currentRotation -
          (360 - (prevIndex - index) * (360 / datesList.length));

    setIsRotating(true);

    gsap.to(".circle__dot", {
      rotation: -newRotation,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(".circle", {
      rotation: newRotation,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setIsRotating(false);
        setCurrentRotation(newRotation);
        setPrevIndex(index);
      },
    });
  }

  React.useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    rotate();
  }, [index]);

  return (
    <div className="circle">
      <div className="circle__container">
        {datesList.map((_, i) => (
          <CircleItem
            key={i}
            setIndex={setIndex}
            currentIndex={index}
            itemIndex={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Circle;
