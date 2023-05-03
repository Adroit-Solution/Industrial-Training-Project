import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Title from "./components/Title";
import { useState } from "react";
import About from "./Pages/About";
import List from "./Pages/List";
import Login from "./components/Login";
import FocusInput from "./Pages/FocusInput";
import RenderPropsComponent from "./Pages/RenderPropsComponent";
import Users from "./Pages/Users";
import Post from "./Pages/Post";
import CounterHook from "./Pages/CounterHook";
import LoginForm from "./components/loginForm";

function App() {
  const [page, setPage] = useState("Home");

  const setHome = () => {
    setPage("Home");
  };

  const setAbout = () => {
    setPage("About");
  };

  return (
    <div className="App">
      <Users />
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
