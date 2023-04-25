import { Component } from "react";
import Title from "../components/Title";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Hi from Home Page</h2>
        <Title title="HomeTitle"></Title>
      </>
    );
  }
}

export default Home;
