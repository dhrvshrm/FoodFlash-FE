import { Button } from "@mui/material";
import React from "react";

function FilterBtn(handleFilterClick) {
  return (
    <div>
      {" "}
      <Button
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: "darkGray",
        }}
        onClick={handleFilterClick}
      >
        Top Rated Restaurants
      </Button>
    </div>
  );
}

export default FilterBtn;
