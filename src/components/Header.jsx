import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../store/context/userContext";

const items = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { user } = useContext(UserContext);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#c0d6e4",
        margin: "0.5rem",
        borderRadius: "1rem",
      }}
    >
      <img
        src="https://img.freepik.com/free-psd/bell-isolated-transparent-background_191095-26127.jpg?t=st=1715367621~exp=1715371221~hmac=189e21143e391d6a64837c837432e246eecb2235dcd4bde86603a5d4ecf72f34&w=740"
        style={{
          height: "4em",
          width: "4rem",
          margin: "0.25rem 2rem",
        }}
        alt="Logo"
      />
      <Typography variant="h4" style={{ margin: "0rem 2rem" }}>
        {user}
      </Typography>
      <div
        style={{
          display: "flex",
          marginRight: "2rem",
          fontWeight: "700",
        }}
      >
        {isOnline && (
          <Typography
            sx={{
              margin: "0rem 1rem",
              textDecoration: "none",
              color: isOnline ? "green" : "red",
            }}
          >
            {isOnline ? "Online ✅" : "Offline ❌"}
          </Typography>
        )}

        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{
              margin: "0rem 1rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
