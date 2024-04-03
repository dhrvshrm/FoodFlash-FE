import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Button } from "@mui/material";

export const RestaurantCardContainer = (props) => {
  const [filteredData, setFilteredData] = useState(props.data);

  const handleFilterClick = () => {
    const filteredData = props.data.filter(
      (restaurant) => restaurant.rating > 4.5
    );
    setFilteredData(filteredData);
  };

  return (
    <>
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          border: "2px solid black",
          padding: "1rem",
        }}
      >
        {filteredData.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
    </>
  );
};
