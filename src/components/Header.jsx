import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../store/context/userContext";
import { useSelector } from "react-redux";

const items = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Cart", path: "/cart", items: true },
];

export const Header = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { user } = useContext(UserContext);
  const { cards } = useSelector((state) => state.card);
  console.log({ cards });

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

  // feat: add online status i header

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#c0d6e4",
        margin: "0rem 2rem",
        marginBottom: "0.5rem",
        borderRadius: "1rem",
        height: "6rem",
        position: "sticky",
        top: "0.75rem",
      }}
    >
      <Typography variant="h4" style={{ margin: "0rem 2rem", fontWeight: 600 }}>
        Zomato!
      </Typography>
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
        <Stack direction="row" spacing={2} alignItems="center">
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
              <Stack direction="row" gap={0.5} alignItems="center">
                {item.name}
                {item.items && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "1.35rem",
                      width: "1.35rem",
                      backgroundColor: "#990000",
                      borderRadius: "50%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                      }}
                    >
                      {(item.items && cards.length > 0 && `${cards.length} `) ||
                        0}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Link>
          ))}
        </Stack>
      </div>
    </div>
  );
};
