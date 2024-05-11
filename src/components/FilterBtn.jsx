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
          backgroundColor: "darkGray",
          height: "2rem",
          margin: "1rem 2rem",
          width: "13rem",
          borderRadius: "1rem",
          cursor: "pointer",
          color: "black",
          border: "1px solid black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#c0d6e4",
          },
          fontWeight: 600,
        }}
        onClick={handleFilterClick}
      >
        Top Rated Restaurants
      </Button>
    </div>
  );
}

export default FilterBtn;
