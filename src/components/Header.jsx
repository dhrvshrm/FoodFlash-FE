import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const items = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Cart", path: "/cart" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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
        src="https://img.freepik.com/free-psd/persian-isolated-transparent-background_191095-39702.jpg?w=740&t=st=1711897038~exp=1711897638~hmac=d3eb10a98a4ebb52842cf0b1733879fae6d3ccb9e83b36995e381bb95dc63513s"
        style={{ height: "4em", width: "4rem", margin: "0.25rem 2rem" }}
        alt="Logo"
      />
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
