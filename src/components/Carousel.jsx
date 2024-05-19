import { Box, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel2 from "../assets/Carousel1.png";
import Carousel1 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";

const styles = {
  root: {
    position: "relative",
    overflow: "hidden",
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
  vignette: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 2))",
  },
};

const STYLES = {
  images: [Carousel1, Carousel2, Carousel3],
};

export const Carousel = () => {
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
        <Box sx={styles.vignette} />
        <Grid item xs={12}>
          <div style={styles.dotsContainer}>
            {STYLES.images.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.dot,
                  backgroundColor:
                    currentSlide === index ? "#303030" : "lightgray",
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
