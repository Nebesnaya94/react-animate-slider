import React from "react";

interface DateCounterProps {
  diff: number;
  initial: number;
  action: () => void;
}

const DateCounter: React.FC<DateCounterProps> = ({ diff, initial, action }) => {
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

  return <span onClick={action}>{count}</span>;
};

export default DateCounter;
