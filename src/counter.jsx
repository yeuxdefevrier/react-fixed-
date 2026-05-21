import { useState } from "react";
import CountDisplay from "./CountDisplay";
import IncreaseButton from "./IncButton";
import DecreaseButton from "./DecButton";
import ResetButton from "./ResetButton";

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

  return (
    <div>
      <h2>Counter</h2>

      <CountDisplay count={count} />

      <IncreaseButton onClick={increase} />
      <DecreaseButton onClick={decrease} />
      <ResetButton onClick={reset} />
    </div>
  );
}

export default Counter;
