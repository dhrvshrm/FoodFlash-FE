import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const paperStyle = {
  marginTop: "2rem",
  padding: "1.5rem",
  backgroundColor: "#f5f5f5",
  borderRadius: "16px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  fontFamily: "Poetsen One",
};

const titleStyle = {
  marginBottom: "1.5rem",
  fontWeight: "bold",
  color: "#333",
  fontFamily: "Poetsen One",
};

const paragraphStyle = {
  marginBottom: "1rem",
  color: "#555",
  fontFamily: "Poetsen One",
};

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Paper style={paperStyle}>
        <Typography
          variant="h4"
          style={titleStyle}
          gutterBottom
          sx={{ fontFamily: "Poetsen One" }}
        >
          About Our Food Ordering App
        </Typography>
        <Typography
          sx={{ fontFamily: "Poetsen One" }}
          variant="body1"
          style={paragraphStyle}
          paragraph
        >
          Welcome to our food ordering app! We are dedicated to providing you
          with the best culinary experience right at your fingertips.
        </Typography>
        <Typography
          sx={{ fontFamily: "Poetsen One" }}
          variant="body1"
          style={paragraphStyle}
          paragraph
        >
          Our app allows you to explore a wide range of restaurants and
          cuisines, place orders seamlessly, and have delicious meals delivered
          to your doorstep.
        </Typography>
        <Typography
          sx={{ fontFamily: "Poetsen One" }}
          variant="body1"
          style={paragraphStyle}
          paragraph
        >
          At our core, we value simplicity, quality, and convenience. Whether
          you're craving your favorite comfort food or looking to explore new
          flavors, our app has got you covered.
        </Typography>
        <Typography
          sx={{ fontFamily: "Poetsen One" }}
          variant="body1"
          style={paragraphStyle}
          paragraph
        >
          We partner with top-rated restaurants in your area to ensure that you
          have access to the finest dining options. From local gems to popular
          chains, there's something for everyone on our platform.
        </Typography>
        <Typography
          sx={{ fontFamily: "Poetsen One" }}
          variant="body1"
          style={paragraphStyle}
          paragraph
        >
          Our user-friendly interface makes it easy to browse menus, place
          orders, and track deliveries in real-time. You can customize your
          orders, add special instructions, and securely pay online for a
          hassle-free experience.
        </Typography>
        <Typography variant="body1" style={paragraphStyle} paragraph>
          Customer satisfaction is our top priority. If you have any questions,
          concerns, or feedback, our dedicated support team is available to
          assist you 24/7.
        </Typography>
        <Typography variant="body1" style={paragraphStyle} paragraph>
          Thank you for choosing us for your dining needs. We look forward to
          serving you delicious meals and making your food ordering experience
          truly memorable.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
