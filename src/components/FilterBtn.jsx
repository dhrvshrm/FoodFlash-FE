import { Button } from "@mui/material";
import React from "react";

function FilterBtn({ handleFilterClick }) {
  return (
    <div>
      {" "}
      <Button
        variant="contained"
        color="secondary"
        sx={{
          height: "2rem",
          width: "fit-content",
          borderRadius: "1rem",
          backgroundColor: "lightGray",
          cursor: "pointer",
          color: "black",
          border: "1px solid black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: " #c0d6e4",
          },
          fontWeight: 400,
          fontFamily: "Poetsen One",
        }}
        onClick={handleFilterClick}
      >
        Top Rated Restaurants
      </Button>
    </div>
  );
}

export default FilterBtn;
