import React from "react";

interface DateCounterProps {
  diff: number;
  initial: number;
}

const DateCounter: React.FC<DateCounterProps> = ({ diff, initial }) => {
  const [count, setCount] = React.useState<number>(initial);

  function counter() {
    setTimeout(() => {
      if (count < diff) {
        setCount(count + 1);
      } else if (count > diff) {
        setCount(count - 1);
      }
    }, 100);
  }

  React.useEffect(() => {
    counter();
  }, [diff, count]);

  return <span>{count}</span>;
};

export default DateCounter;
