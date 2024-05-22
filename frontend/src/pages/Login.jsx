import { Box, Stack } from "@mui/material";
import React from "react";
import LoginForm from "../components/LoginForm";
import { Carousel } from "../components/Carousel";

const styles = {
  root: {
    position: "relative",
    overflow: "hidden",
    // width: "100%",
    height: "100%",
  },

  carousel: {
    display: "flex",
    transition: "transform 0.9s ease",
  },
  slide: {
    width: "100%",
    flex: "0 0 auto",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
    height: "100vh",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "3rem",
    left: "10%",
    transform: "translateX(-50%)",
    display: "flex",
  },
  dot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
    margin: "0 10px",
    cursor: "pointer",
    color: "red",
  },
  image: {
    width: "100%",
    height: "100%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)",
  },
  aboveBox: {
    position: "absolute",
    top: 250,
    right: 200,
    width: "32rem",
    height: "25rem",
    backgroundColor: "transparent",
    zIndex: 1,
    borderRadius: "2rem",
    outline: "none",
  },
};

const Login = () => {
  return (
    <Stack
      direction="row"
      sx={{ width: "100%", height: "100vh", outline: "none" }}
    >
      <Carousel />
      <Box sx={styles.aboveBox}>
        <LoginForm />
      </Box>
    </Stack>
  );
};

export default Login;
