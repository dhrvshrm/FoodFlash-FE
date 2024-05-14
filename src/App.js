import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import appStore from "./store/appStore";
import UserContext from "./store/context/userContext";
import { Provider } from "react-redux";

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

  const renderHeader = window.location.pathname !== "/";

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={userData}>
        <div>
          {renderHeader && <Header />} {/* Conditionally render Header */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
