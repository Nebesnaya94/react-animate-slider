export function disposeCircleItems(count: number) {
  const circleItems = document.querySelectorAll(".circle__dot");
  const angleStep = 360 / count;
  for (let i = 0; i < count; i++) {
    const item = circleItems[i] as HTMLElement;
    item.style.transform = `rotate(${
      angleStep * i
    }deg) translate(265px) rotate(-${angleStep * i}deg)`;
  }
}
