import React, { useEffect, useState } from "react";
import { Button, Paper, Grid, Stack, Box } from "@mui/material";

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
    minWidth: "100%",
    flex: "0 0 auto",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "3rem",
    left: "50%",
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
    // Add bottom shadow here
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)",
  },
};

const STYLES = {
  images: [
    "https://w0.peakpx.com/wallpaper/495/863/HD-wallpaper-random-awesome-blue-games-nerds-red.jpg",
    "https://w0.peakpx.com/wallpaper/495/863/HD-wallpaper-random-awesome-blue-games-nerds-red.jpg",
    "https://images.unsplash.com/photo-1542378151504-0361b8ec8f93?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
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
    <Stack direction="row">
      <Box sx={{ width: "75%", height: "100vh", backgroundColor: "lightblue" }}>
        <Carousel />
      </Box>
    </Stack>
  );
};

export default Login;
