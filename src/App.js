import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Title title="AppTitle"></Title>
    </div>
  );
}

export default App;
