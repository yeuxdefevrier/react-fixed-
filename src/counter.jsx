import { useState } from "react";
import CountDisplay from "./CountDisplay";
import IncreaseButton from "./IncButton";
import DecreaseButton from "./DecButton";
import ResetButton from "./ResetButton";
import DoubleIncrement from "./DoubleIncr";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function doubleIncrease() {
    setCount(count + 2);
  }

  return (
    <div>
      <h2>Counter</h2>

      <CountDisplay count={count} />

      <IncreaseButton onClick={increase} />
      <DecreaseButton onClick={decrease} />
      <ResetButton onClick={reset} />
      <DoubleIncrement onClick={doubleIncrease} />
    </div>
  );
}

export default Counter;
