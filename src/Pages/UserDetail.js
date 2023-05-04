import React, { Component } from "react";

export class UserDetail extends Component {
  render() {
    const { User } = this.props;
    console.log(User);
    return (
      <p>
        Id = {User.id}
        <br />
        Name = {User.name}
        <br />
        Email = {User.email}
        <br />
        Phone = {User.Phone}
        <br />
        UserName = {User.username}
        <br />
        Website = {User.website}
        <br />
        <br />
        <hr />
      </p>
    );
  }
}

export default React.memo(UserDetail);
