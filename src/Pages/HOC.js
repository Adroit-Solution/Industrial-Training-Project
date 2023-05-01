import React, { Component } from "react";

const hOC = (WrappedComponent, data) => {
  class HOC extends Component {
    render() {
      console.log(data);
      return <WrappedComponent data={data} {...this.props} />;
    }
  }
  return HOC;
};
export default hOC;
