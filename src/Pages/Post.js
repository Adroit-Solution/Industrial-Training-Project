import axios from "axios";

import React, { Component } from "react";

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      userId: "",
    };
  }
  render() {
    const handleSubmit = (e) => {
      const send = {
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId,
      };

      axios
        .post("https://jsonplaceholder.typicode.com/posts", send)
        .then((res) => {
          if (res.status === 201) {
            alert("Object Created");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      e.preventDefault();
    };
    return (
      <>
        <form>
          <label>Title</label> <br />
          <input
            type={"text"}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
          <br /> <br />
          <label>Body</label> <br />
          <input
            type={"text"}
            onChange={(e) => {
              this.setState({ body: e.target.value });
            }}
          />
          <br /> <br />
          <label>UserID</label> <br />
          <input
            type={"text"}
            onChange={(e) => {
              this.setState({ userId: e.target.value });
            }}
          />
          <br /> <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default Post;
