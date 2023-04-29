import React from "react";
import style from "../components/title.module.css";

function Title(props) {
  const { title, description } = props;
  return (
    <>
      <div className={style.card}>
        <h3 className={style.title}>Title : {title}</h3>
        <h3>description : {description}</h3>
        <br />
      </div>
    </>
  );
}

export default Title;
