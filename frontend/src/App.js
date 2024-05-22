import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import appStore from "./store/appStore";
import UserContext from "./store/context/userContext";
import { Provider } from "react-redux";

import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";

function App() {
  const [userData, setUserData] = useState({
    user: "",
  });
  const location = useLocation();

  useEffect(() => {
    const data = {
      user: "Lalit",
    };
    setUserData(data);
  }, []);

  const isLoginPage = location.pathname === "/";

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={userData}>
        {isLoginPage ? (
          <LoginLayout>
            <Outlet />
          </LoginLayout>
        ) : (
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        )}
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
