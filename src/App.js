import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import appStore from "./store/appStore";
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
    <Provider store={appStore}>
      <UserContext.Provider value={userData}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
