import React from "react";
import CircleItem from "./CircleItem";
import gsap from "gsap";
import { datesList } from "../../data/sliderData";
import { CountContext } from "../../helpers/createContext";

const Circle: React.FC = () => {
  const [isRotating, setIsRotating] = React.useState<boolean>(false);
  const [currentRotation, setCurrentRotation] = React.useState<number>(0);
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  const [prevIndex, setPrevIndex] = React.useState<number>(0);

  const { currentIndex, totalCount } = React.useContext(CountContext);

  function rotate() {
    if (isRotating || !hasMounted) return;

    const newRotation =
      currentIndex > prevIndex
        ? currentRotation +
          (360 - (currentIndex - prevIndex) * (360 / totalCount))
        : currentRotation -
          (360 - (prevIndex - currentIndex) * (360 / totalCount));

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
        setPrevIndex(currentIndex);
      },
    });
  }

  React.useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    rotate();
  }, [currentIndex]);

  return (
    <div className="circle">
      <div className="circle__container">
        {datesList.map((_, i) => (
          <CircleItem key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Circle;
