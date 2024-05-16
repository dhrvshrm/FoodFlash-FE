import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/home";
    // navigate("/home");
  };

  const handleLoginAsGuest = () => {
    setUsername("guest");
    setPassword("guest");
  };

  const STYLES = {
    loginContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      borderRadius: "2rem",
    },
    formContainer: {
      padding: "30px",
      borderRadius: "2rem",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      width: "100%",
      border: "1px solid black",
      height: "100%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      margin: "10px 0",
      width: "100%",
      color: "black",
      borderRadius: "1rem",
      backgroundColor: "white",
      fontFamily: "Poetsen One",
    },
    button: {
      margin: "10px 0",
      width: "100%",
      backgroundColor: "black",
      color: "white",
      fontFamily: "Poetsen One",
    },
  };

  return (
    <Box sx={STYLES.loginContainer}>
      <Box sx={STYLES.formContainer}>
        <form onSubmit={handleLogin} style={STYLES.form}>
          <Typography
            variant="h4"
            color="black"
            fontWeight={600}
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
              fontSize: "2rem",
              fontFamily: "Poetsen One",
            }}
          >
            Login
          </Typography>
          <TextField
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            style={STYLES.input}
            required
            autoComplete="off"
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            style={STYLES.input}
            required
            autoComplete="off"
          />
          <Button type="submit" variant="contained" style={STYLES.button}>
            Login
          </Button>
          <Button
            type="button"
            onClick={handleLoginAsGuest}
            variant="contained"
            style={STYLES.button}
          >
            Login as Guest
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
