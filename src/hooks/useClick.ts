import React from "react";
import gsap from "gsap";

export const useClick = () => {
  const clickHandler = (e: MouseEvent) => {
    const clickEffect = document.createElement("div");
    clickEffect.className = "click-effect";
    const x = e.clientX;
    const y = e.clientY;
    clickEffect.style.left = `${x}px`;
    clickEffect.style.top = `${y}px`;
    document.body.append(clickEffect);

    gsap.to(clickEffect, {
      scale: 2,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        clickEffect.remove();
      },
    });
  };

  React.useEffect(() => {
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
};
