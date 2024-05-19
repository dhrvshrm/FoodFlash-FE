import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import FilterBtn from "./FilterBtn";
import { Button, Input, Stack } from "@mui/material";
import UserOffline from "./UserOffline";
import { useGeolocation } from "../hooks/useGeoLocation";

const STYLES = {
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "1rem",
    backgroundColor: "#c0d6e4",
    margin: "1rem",
    padding: "1rem 2rem",
    fontFamily: "Poetsen One",
  },
  button: {
    height: "2rem",
    width: "5rem",
    borderRadius: "1rem",
    backgroundColor: "lightGray",
    cursor: "pointer",
    color: "black",
    border: "1px solid black",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#c0d6e4",
    },
    fontWeight: 400,
    fontFamily: "Poetsen One",
  },
  input: {
    height: "2rem",
    width: "20rem",
    paddingLeft: "0.5rem",
    fontFamily: "Poetsen One",
    backgroundColor: "white",
  },
};

const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

export const RestaurantCardContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { latitude, longitude } = useGeolocation();
  console.log({ listOfRestaurant });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`
      );
      const json = await data.json();
      const { restaurants } =
        json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle ||
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle ||
        [];
      setListOfRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    if (searchText === "") {
      fetchData();
    }
  }, [searchText]);

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

  function handleReset() {
    setSearchText("");
    fetchData();
  }

  return (
    <>
      <Stack direction="row" gap={3} sx={STYLES.container}>
        <FilterBtn handleFilterClick={handleFilterClick} />
        <Button onClick={handleReset} sx={STYLES.button}>
          Clear
        </Button>

        <Input
          placeholder="Search for your Favourite Dishes ... "
          autoFocus={false}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={STYLES.input}
        />
        <Button onClick={handleSearch} sx={STYLES.button}>
          Search
        </Button>
      </Stack>
      {!isOnline ? (
        <UserOffline />
      ) : (
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
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
                  aggregatedDiscountInfoV3={
                    restaurant.info.aggregatedDiscountInfoV3
                  }
                />
              ))}
            </>
          )}
        </Stack>
      )}
    </>
  );
};
