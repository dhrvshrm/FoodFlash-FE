import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import FilterBtn from "./FilterBtn";
import { Button, Input, Stack } from "@mui/material";
import UserOffline from "./UserOffline";

export const RestaurantCardContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;
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

  const handleSearch = () => {
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

  function handleReset() {
    setSearchText("");
    fetchData();
  }

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0760&lng=72.8777"
    );
    const json = await data.json();

    const { restaurants } =
      json.data.cards[3].card.card.gridElements?.infoWithStyle ||
      json.data.cards[4].card.card.gridElements?.infoWithStyle ||
      [];
    setIsLoading(false);
    setListOfRestaurant(restaurants);
  };

  return (
    <>
      <Stack
        direction="row"
        gap={3}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "1rem",
          backgroundColor: " #c0d6e4",
          margin: "1rem",
          padding: "1rem 2rem",
          fontFamily: "Poetsen One",
        }}
      >
        <FilterBtn handleFilterClick={handleFilterClick} />
        <Button
          onClick={handleReset}
          sx={{
            height: "2rem",
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

            fontWeight: 400,
            fontFamily: "Poetsen One",
          }}
        >
          Reset
        </Button>

        <Input
          placeholder="Search for your Favourite Dishes ... "
          autoFocus={false}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            height: "2rem",
            width: "20rem",
            paddingLeft: "0.5rem",
            fontFamily: "Poetsen One",
            backgroundColor: "white",
          }}
        />
        <Button
          onClick={handleSearch}
          sx={{
            height: "2rem",
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

            fontWeight: 400,
            fontFamily: "Poetsen One",
          }}
        >
          Search
        </Button>
      </Stack>
      {!isOnline ? (
        <UserOffline />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
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
