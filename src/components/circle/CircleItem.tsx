import gsap from "gsap";
import React from "react";

interface ICircleItemProps {
  setIndex: (value: number) => void;
  currentIndex: number;
  itemIndex: number;
}

interface IAnimationValues {
  [key: string]: string | number;
}

const CircleItem: React.FC<ICircleItemProps> = ({
  setIndex,
  currentIndex,
  itemIndex,
}) => {
  const buttonRef = React.useRef(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  function animateButton(
    startValues: IAnimationValues,
    endValues: IAnimationValues
  ) {
    const button = buttonRef.current;
    if (currentIndex === itemIndex || isAnimating) return;
    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        gsap.set(button, { clearProps: "all" });
      },
    });
    tl.fromTo(button, startValues, endValues);
  }

  function buttonIn() {
    animateButton(
      { scale: 0, opacity: 0, background: "#303e58" },
      { scale: 1, opacity: 1, background: "#fff", duration: 0.5 }
    );
  }

  function buttonOut() {
    animateButton(
      { scale: 1, opacity: 1, background: "#fff" },
      { scale: 0, opacity: 0, background: "#303e58", duration: 0.5 }
    );
  }

  return (
    <div className={`circle__dot circle__dot_${itemIndex + 1}`}>
      <button
        ref={buttonRef}
        onMouseEnter={buttonIn}
        onMouseLeave={buttonOut}
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
