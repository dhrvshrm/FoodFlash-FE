import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={10}>
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Oops! Page not found.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Error404;
