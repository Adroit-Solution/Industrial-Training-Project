import axios from "axios";
import React, { Component } from "react";
import UserDetail from "./UserDetail";

export class Users extends Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
        console.log(this.state.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  render() {
    const { users } = this.state;
    const show = users.map((user) => (
      <UserDetail User={user} key={user.id + user.username} />
    ));
    return <div>{show}</div>;
  }
}

export default Users;
