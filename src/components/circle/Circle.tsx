import React from "react";
import CircleItem from "./CircleItem";
import gsap from "gsap";

interface ICircleProps {
  index: number;
  setIndex: (value: number) => void;
}

const Circle: React.FC<ICircleProps> = ({ index, setIndex }) => {
  const [isRotating, setIsRotating] = React.useState<boolean>(false);
  const [currentRotation, setCurrentRotation] = React.useState<number>(0);
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const [prevIndex, setPrevIndex] = React.useState<number>(0);

  function rotate() {
    if (isRotating || !hasMounted) return;

    const newRotation =
      index > prevIndex
        ? currentRotation + (360 - (index - prevIndex) * 120)
        : currentRotation - (360 - (prevIndex - index) * 120);

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
        <CircleItem setIndex={setIndex} currentIndex={index} itemIndex={0} />
        <CircleItem setIndex={setIndex} currentIndex={index} itemIndex={1} />
        <CircleItem setIndex={setIndex} currentIndex={index} itemIndex={2} />
      </div>
    </div>
  );
};

export default Circle;
