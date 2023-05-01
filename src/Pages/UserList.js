import React, { Component } from "react";

export class UserList extends Component {
  render() {
    const { data } = this.props;
    return (
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
        {data.map((d) => (
          <tr>
            <td>{d.id}</td>
            <td>{d.name}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default UserList;
