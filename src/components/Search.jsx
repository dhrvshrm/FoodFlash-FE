import { Button, Input } from "@mui/material";

export default function Search() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid black",
        borderRadius: "1rem",
        backgroundColor: " #c0d6e4",
      }}
    >
      <Input
        placeholder="Search for your Favourite Dishes ... "
        autoFocus={false}
        sx={{
          height: "2rem",
          margin: "1rem 2rem",
          width: "20rem",
          paddingLeft: "0.5rem",
          fontFamily: "Raleway, sans-serif",
          backgroundColor: "white",
        }}
      />
      <Button
        sx={{
          height: "2rem",
          margin: "1rem 2rem",
          width: "5rem",
          borderRadius: "1rem",
          backgroundColor: "lightGray",
          cursor: "pointer",
          color: "black",
          border: "1px solid black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: " #c0d6e4",
          },
        }}
      >
        Search
      </Button>
    </div>
  );
}
