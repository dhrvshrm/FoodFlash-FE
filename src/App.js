import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
