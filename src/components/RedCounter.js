import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      break;
  }
};

function RedCounter() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div>Counter {state}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Add</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br />
      <br />
    </>
  );
}

export default RedCounter;
