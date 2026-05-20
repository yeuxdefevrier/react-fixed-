import * as React from "react";
import { useState } from "react";
import Increase from "./Increase";
import Decrease from "./Decrease";
import Reset from "./Reset";
import DoubleIncrease from "./DoubleIncrease";
import CountDisplay from "./CountDisplay";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> counter</h2>

      <CountDisplay count={count} />

      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
      <DoubleIncrease setCount={setCount} />
      <Reset setCount={setCount} />
    </div>
  );
}

export default Counter;
