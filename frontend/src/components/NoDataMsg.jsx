import { Typography } from "@mui/material";

function NoDataMessage({ type }) {
  const messages = {
    noMenuData: "No menu data available",
    noItems: "No items available in the menu",
  };

  return (
    <Typography
      sx={{
        padding: "1rem",
        marginTop: "10rem",
        textAlign: "center",
        fontWeight: 500,
        fontSize: "1.5rem",
        fontFamily: "Poetsen One",
      }}
    >
      {messages[type]}
    </Typography>
  );
}

export default NoDataMessage;
