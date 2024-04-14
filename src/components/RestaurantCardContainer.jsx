import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Button } from "@mui/material";
import { cardData } from "../constants";

export const RestaurantCardContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log({ isLoading });
  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

  const handleFilterClick = () => {
    const filteredList = listOfRestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4.0
    );
    setListOfRestaurant(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const { restaurants } =
      json.data.cards[4].card.card.gridElements.infoWithStyle;
    setIsLoading(false);
    setListOfRestaurant(restaurants);
  };

  if (isLoading) return <h1>Loading...</h1>;

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
          gap: "2rem",
          border: "2px solid black",
          padding: "2rem",
        }}
      >
        {listOfRestaurant.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines.slice(0, 5).join(", ")}
            rating={`⭐ ${
              restaurant.info.avgRating ? restaurant.info.avgRating : "N/A"
            }`}
            deliveryTime={`🕒 ${restaurant.info.sla.deliveryTime} min`}
            imgUrl={`${imgUrl}/${restaurant.info.cloudinaryImageId}`}
            isLoading={isLoading}
          />
        ))}
      </div>
    </>
  );
};
