import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import FilterBtn from "./FilterBtn";
import { Button, Input } from "@mui/material";
import UserOffline from "./userOffline";

export const RestaurantCardContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  console.log({ isOnline });

  const handleSearch = () => {
    console.log("Search for: ", searchText);
    const filteredList = listOfRestaurant.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        restaurant.info.cuisines
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    setListOfRestaurant(filteredList);
  };

  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

  function handleFilterClick() {
    const filteredList = listOfRestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4.2
    );
    setListOfRestaurant(filteredList);
  }

  useEffect(() => {
    if (searchText === "") {
      fetchData();
    }
  }, [searchText]);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log({
      data: json.data.cards,
    });
    const { restaurants } =
      json.data.cards[3].card.card.gridElements?.infoWithStyle ||
      json.data.cards[4].card.card.gridElements?.infoWithStyle;
    setIsLoading(false);
    setListOfRestaurant(restaurants);
  };

  return (
    <>
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
        <FilterBtn handleFilterClick={handleFilterClick} />
        <Input
          placeholder="Search for your Favourite Dishes ... "
          autoFocus={false}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
          onClick={handleSearch}
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
            fontWeight: 600,
          }}
        >
          Search
        </Button>
      </div>
      {!isOnline ? (
        <UserOffline />
      ) : (
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
          {isLoading ? (
            <Shimmer count={12} />
          ) : (
            <>
              {listOfRestaurant?.map((restaurant, index) => (
                <RestaurantCard
                  key={index}
                  name={restaurant.info.name}
                  cuisine={restaurant.info.cuisines.slice(0, 5).join(", ")}
                  rating={`⭐ ${
                    restaurant.info.avgRating
                      ? restaurant.info.avgRating
                      : "N/A"
                  }`}
                  deliveryTime={`🕒 ${restaurant.info.sla.deliveryTime} min`}
                  imgUrl={`${imgUrl}/${restaurant.info.cloudinaryImageId}`}
                  isLoading={isLoading}
                  id={restaurant.info.id}
                />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
