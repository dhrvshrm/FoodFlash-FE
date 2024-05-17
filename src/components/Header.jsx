import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../store/context/userContext";
import { useSelector } from "react-redux";

const STYLES = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#c0d6e4",
    margin: "1rem 2rem",
    marginBottom: "0.5rem",
    borderRadius: "1rem",
    height: "6rem",
  },
  title: {
    margin: "0rem 2rem",
    fontWeight: 600,
    fontFamily: "Poetsen One",
  },
  onlineStatus: {
    display: "flex",
    marginRight: "2rem",
    fontWeight: "700",
  },
  link: {
    margin: "0rem 1rem",
    textDecoration: "none",
    color: "black",
    fontFamily: "Poetsen One",
  },
  onlineText: {
    margin: "0rem 1rem",
    textDecoration: "none",
    fontFamily: "Poetsen One",
  },
  badgeBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "1.35rem",
    width: "1.35rem",
    backgroundColor: "#990000",
    borderRadius: "50%",
    fontFamily: "Poetsen One",
  },
  badgeText: {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: 400,
    fontFamily: "Poetsen One",
  },
};

const items = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Cart", path: "/cart", items: true },
  { name: "Log Out", path: "/" },
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
    <div style={STYLES.header}>
      <Typography variant="h4" style={STYLES.title}>
        FoodFlash
      </Typography>
      <div style={STYLES.onlineStatus}>
        {isOnline && (
          <Typography sx={STYLES.onlineText}>
            {isOnline ? "Online ✅" : "Offline ❌"}
          </Typography>
        )}
        <Stack direction="row" spacing={2} alignItems="center">
          {items.map((item, index) => (
            <Link key={index} to={item.path} style={STYLES.link}>
              <Stack direction="row" gap={0.5} alignItems="center">
                <Typography sx={STYLES.link}>{item.name}</Typography>
                {item.items && (
                  <Box sx={STYLES.badgeBox}>
                    <Typography variant="h4" sx={STYLES.badgeText}>
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
