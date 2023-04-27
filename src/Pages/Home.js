import { Component } from "react";
import Title from "../components/Title";

class Home extends Component {
  state = {
    title: "Title",
    description: "Nothing just using a State with Prop",
  };
  render() {
    return (
      <Title
        title={this.state.title}
        description={this.state.description}
      ></Title>
    );
  }
}

export default Home;
