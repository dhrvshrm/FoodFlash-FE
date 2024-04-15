import React from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const paperStyle = {
  marginTop: "2rem",
  padding: "1.5rem",
  backgroundColor: "#f5f5f5",
  borderRadius: "16px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="md">
      <Paper style={paperStyle}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            id="name"
            label="Your Name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Your Email"
            type="email"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
          >
            Send Message
          </Button>
        </form>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "2rem" }}
          spacing={2}
        >
          <Grid item>
            <EmailOutlinedIcon color="primary" style={{ fontSize: 40 }} />
          </Grid>
          <Grid item>
            <Typography variant="body1">contact@example.com</Typography>
          </Grid>
          <Grid item>
            <LinkedInIcon color="primary" style={{ fontSize: 40 }} />
          </Grid>
          <Grid item>
            <Typography variant="body1">Your LinkedIn Profile</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactPage;
