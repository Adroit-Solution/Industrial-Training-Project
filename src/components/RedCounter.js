import React, { useContext, useReducer } from "react";
import { Context } from "../App";

function RedCounter() {
  const context = useContext(Context);
  console.log(context);
  return (
    <>
      <div>Counter {context.state}</div>
      <button onClick={() => context.dispatch({ type: "increment" })}>
        Add
      </button>
      <br />
      <br />
      <button onClick={() => context.dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <br />
      <br />
    </>
  );
}

export default RedCounter;
