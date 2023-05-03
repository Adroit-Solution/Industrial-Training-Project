import React, { useState } from "react";

function CounterHook() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    for (let index = 0; index < 5; index++) {
      setCounter((prev) => prev + 1);
    }
  };
  return (
    <>
      <div>Counter : {counter}</div>
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <br />
      <br />
      <button onClick={handleClick}>Add 5</button>
      <br />
    </>
  );
}

export default CounterHook;
