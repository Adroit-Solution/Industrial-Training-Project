import { Component, PureComponent } from "react";
import Title from "../components/Title";
import hOC from "./HOC";
import UserList from "./UserList";

class Home extends PureComponent {
  UsersData = [
    {
      id: 1,
      name: "Krunal",
    },
    {
      id: 2,
      name: "Ankit",
    },
    {
      id: 3,
      name: "Rushabh",
    },
  ];
  state = {
    title: "Home Page",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi modi
    natus sapiente iusto nobis fuga repudiandae dolorem dolorum. Rem in
    sint culpa nihil natus dicta dolorem soluta, doloribus, quia rerum
    earum impedit et animi laboriosam facere, nemo dolores ullam officiis.
    Perspiciatis necessitatibus, corrupti aliquid maxime tempore
    repellendus magni facilis quae ex sit nobis quaerat ipsum id alias
    voluptates ipsam voluptatibus eos est laborum dolores accusantium!
    Nostrum laboriosam architecto dignissimos quis dolorem iste quas
    voluptatem repellat repellendus! Nihil, modi sapiente porro iste quasi
    veniam doloribus! Dicta ab a nihil! Dicta, repudiandae nisi numquam
    asperiores libero quos repellat! Nesciunt accusantium numquam in
    necessitatibus? Repudiandae, excepturi corporis rem, sit quo quasi
    quod hic minima facilis consequatur fugit praesentium magni ipsam
    ullam recusandae cupiditate?`,
  };

  Users = hOC(UserList, this.UsersData);

  render() {
    return (
      <>
        {/* <Title
          title={this.state.title}
          description={this.state.description}
        ></Title> */}
        <this.Users />
      </>
    );
  }
}

export default Home;
