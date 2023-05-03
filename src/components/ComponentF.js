import React, { useContext } from "react";
import { Context } from "../App";

function ComponentF() {
  const contextValue = useContext(Context);
  return <div>This is a {contextValue}</div>;
}

export default ComponentF;
