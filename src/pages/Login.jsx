import { Box, Grid, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import Carousel2 from "../assets/Carousel1.png";
import Carousel1 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";

const styles = {
  root: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
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

const STYLES = {
  images: [Carousel1, Carousel2, Carousel3],
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === STYLES.images.length - 1 ? 0 : currentSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div
            style={{
              ...styles.carousel,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {STYLES.images.map((image, index) => (
              <Paper key={index} style={styles.slide}>
                <img src={image} alt={`Slide ${index}`} style={styles.image} />
              </Paper>
            ))}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={styles.dotsContainer}>
            {STYLES.images.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.dot,
                  backgroundColor: currentSlide === index ? "#000" : "#ccc",
                }}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const Login = () => {
  return (
    <Stack direction="row" sx={{ backgroundColor: "black" }}>
      <Stack
        direction="row"
        sx={{ width: "75%", height: "100vh", outline: "none" }}
      >
        <Carousel />
        <Box sx={styles.aboveBox}>
          <LoginForm />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Login;
