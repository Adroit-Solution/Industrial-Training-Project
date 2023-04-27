import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  addCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>Current Count is {this.state.count}</div>
        <button onClick={this.addCounter}>Hit me</button>
      </>
    );
  }
}
