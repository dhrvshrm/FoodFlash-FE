import "./App.css";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* <Body />
       */}
      <Outlet />
    </div>
  );
}

export default App;
