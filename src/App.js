import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import UserContext from "./store/context/userContext";

function App() {
  const [userData, setUserData] = useState({
    user: "",
  });

  // useEffect to set user data in the context
  useEffect(() => {
    const data = {
      user: "Lalit",
    };
    setUserData(data);
  }, []);

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
