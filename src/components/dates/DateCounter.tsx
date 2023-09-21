import React from "react";

interface DateCounterProps {
  diff: number;
  initial: number;
}

const DateCounter: React.FC<DateCounterProps> = ({ diff, initial }) => {
  const [count, setCount] = React.useState<number>(initial);

  function counter(duration: number) {
    setTimeout(() => {
      if (count < diff) {
        setCount(count + 1);
      } else if (count > diff) {
        setCount(count - 1);
      }
    }, duration);
  }

  const counterDuration = React.useMemo(() => {
    return 1000 / Math.abs(diff - count);
  }, [diff]);

  React.useEffect(() => {
    counter(counterDuration);
  }, [diff, count]);

  return <span>{count}</span>;
};

export default DateCounter;
