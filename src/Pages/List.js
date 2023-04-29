import React, { Component } from "react";
import Title from "../components/Title";

class List extends Component {
  render() {
    const arr = [
      { title: "First", description: "This is First", id: 1 },
      { title: "Second", description: "This is Second", id: 2 },
      { title: "Third", description: "This is Third", id: 3 },
      { title: "Fourth", description: "This is Fourth", id: 4 },
    ];

    const show = arr.map((obj) => (
      <Title key={obj.title} title={obj.title} description={obj.description} />
    ));
    return <div>{show}</div>;
  }
}

export default List;
