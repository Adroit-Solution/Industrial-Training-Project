import React from "react";

function Title(props) {
  const { description } = props;
  return (
    <>
      <h3>Title : {description.title}</h3>
      <h3>description : {description.description}</h3>
      <h3>id : {description.id}</h3>
      <br />
    </>
  );
}

export default Title;
