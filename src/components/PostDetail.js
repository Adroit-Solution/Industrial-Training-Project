import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetail from "../Pages/UserDetail";

function PostDetail() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <input
        type={"text"}
        onChange={(e) => {
          if (e.target.value === "") {
            setId(1);
            return;
          }
          console.log(e.target.value);
          setId(e.target.value);
        }}
      />
      <p>
        <h1>{post.title}</h1>
        <h4>{post.body}</h4>
      </p>
    </>
  );
}

export default PostDetail;
