import React from "react";

function Title(props) {
  return (
    <>
      <h1>Same Value = This is Title Page</h1>
      <h1>Prop Value = Title of Page : {props.title}</h1>
    </>
  );
}

export default Title;
