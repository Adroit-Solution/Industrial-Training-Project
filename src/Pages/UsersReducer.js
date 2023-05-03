import axios from "axios";
import React, { Component, useEffect, useReducer, useState } from "react";
import UserDetail from "./UserDetail";

const initialState = {
  user: {},
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        user: action.data,
        loading: false,
        error: "",
      };
    case "Failed":
      return {
        user: {},
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

function UsersReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        dispatch({ type: "Success", data: response.data });
      })
      .catch((error) => {
        dispatch({ type: "Failed", error: error.message });
      });
  }, []);

  return (
    <div>
      {state.loading ? (
        "Loading..."
      ) : state.error ? (
        state.error
      ) : (
        <UserDetail
          User={state.user}
          key={state.user.id + state.user.username}
        />
      )}
      {}
    </div>
  );
}

export default UsersReducer;
