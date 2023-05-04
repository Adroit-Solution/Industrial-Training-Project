import React, { Component, useEffect, useRef } from "react";

function InputRef() {
  const ref = useRef(null);
  const focusInput = () => {
    ref.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return <input type={"text"} ref={ref} />;
}

export default InputRef;
