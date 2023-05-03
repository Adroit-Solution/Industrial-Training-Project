import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import UserDetail from "./UserDetail";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        console.log(this.state.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const show = users.map((user) => (
    <UserDetail User={user} key={user.id + user.username} />
  ));
  return <div>{show}</div>;
}

export default Users;
