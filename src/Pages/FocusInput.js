import React, { Component } from "react";
import InputRef from "./InputRef";

export default class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = {};
  }

  handleClick = () => {
    console.log(this.componentRef);
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <React.Fragment>
        <InputRef ref={this.componentRef} />
        <button onClick={this.handleClick}>Click</button>
      </React.Fragment>
    );
  }
}
