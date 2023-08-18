import { useState, useCallback, useMemo, memo } from "react";

const slowFunc = () => {
  let n = 0;
  for (let i = 0; i < 1000000000; i++) {
    n += 1;
  }
  return n;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  // const value = slowFunc();
  const value = useMemo(() => slowFunc(), []);

  console.log(value);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <button
      onClick={() => increaseCount()}
      className=" w-28 min-w-fit mb-2 m-2 p-1 font-semibold text-white bg-violet-700 rounded-lg"
    >
      Count {count}
    </button>
  );
};

export default memo(Counter);
