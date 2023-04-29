import React from "react";

function Title(props) {
  const { title, description } = props;
  return (
    <>
      <h3>Title of Page : {title}</h3>
      <br />
      <p>{description}</p>
    </>
  );
}

export default Title;
