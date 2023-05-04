import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Title from "./components/Title";
import React, { useReducer, useState } from "react";
import About from "./Pages/About";
import List from "./Pages/List";
import Login from "./components/Login";
import FocusInput from "./Pages/FocusInput";
import RenderPropsComponent from "./Pages/RenderPropsComponent";
import Users from "./Pages/Users";
import Post from "./Pages/Post";
import CounterHook from "./Pages/CounterHook";
import LoginForm from "./components/loginForm";
import PostDetail from "./components/PostDetail";
import ComponentE from "./components/ComponentE";
import RedCounter from "./components/RedCounter";
import UsersReducer from "./Pages/UsersReducer";
import RegisterUser from "./components/RegisterUser";
import InputRef from "./Pages/InputRef";

export const Context = React.createContext();
const intialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      break;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [page, setPage] = useState("Home");

  const setHome = () => {
    setPage("Home");
  };

  const setAbout = () => {
    setPage("About");
  };

  return (
    <div className="App">
      <InputRef />
    </div>
  );

  // if (page === "Home") {
  //   return (
  //     <>
  //       <button
  //         style={{ height: "40px", borderRadius: "5px", margin: "5px" }}
  //         onClick={setHome}
  //       >
  //         Home
  //       </button>
  //       <button
  //         style={{ height: "40px", borderRadius: "5px" }}
  //         onClick={setAbout}
  //       >
  //         About
  //       </button>
  //       <Home />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <button
  //         style={{ height: "40px", borderRadius: "5px", margin: "5px" }}
  //         onClick={setHome}
  //       >
  //         Home
  //       </button>
  //       <button
  //         style={{ height: "40px", borderRadius: "5px" }}
  //         onClick={setAbout}
  //       >
  //         About
  //       </button>
  //       <About />
  //     </>
  //   );
  // }
  // return (
  //   <div className="App">
  // <button
  //   style={{ height: "40px", borderRadius: "5px", margin: "5px" }}
  //   onClick={setHome}
  // >
  //   Home
  // </button>
  // <button
  //   style={{ height: "40px", borderRadius: "5px" }}
  //   onClick={setAbout}
  // >
  //   About
  // </button>
  //     {page === "Home" ? <Home /> : <About />}
  //   </div>
  // );
}

export default App;
