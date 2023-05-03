import React from "react";
import { Context } from "../App";

function ComponentF() {
  return (
    <div>
      <Context.Consumer>
        {(user) => {
          return <div>{user} Passed Successfully</div>;
        }}
      </Context.Consumer>
    </div>
  );
}

export default ComponentF;
