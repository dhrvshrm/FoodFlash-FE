import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={10}>
        <Typography
          variant="h1"
          color="primary"
          gutterBottom
          sx={{ fontFamily: "Poetsen One" }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          color="textSecondary"
          gutterBottom
          sx={{ fontFamily: "Poetsen One" }}
        >
          Oops! Page not found.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ fontFamily: "Poetsen One" }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ fontFamily: "Poetsen One" }}
          color="primary"
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Error404;
