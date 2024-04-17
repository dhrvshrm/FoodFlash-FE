import React, { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchData();
  }, []);

  // const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;
  const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=`;

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(URL + id);
      const data = await response.json();
      console.log("Fetched data:", data);
      setMenuData(data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  }

  console.log("menuData:", menuData);

  if (loading) return <Shimmer count={12} />;
  if (error) return <Typography>{error}</Typography>;

  if (!menuData || !menuData.cards || !menuData.cards[2]?.card?.card?.info) {
    return <Typography>No menu data available</Typography>;
  }

  const { cuisines, name, costForTwoMessage, avgRating, sla } =
    menuData.cards[2].card.card.info;
  const { itemCards } =
    menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];
  console.log({ itemCards });

  if (!itemCards || itemCards.length === 0) {
    return <Typography>No items available in the menu</Typography>;
  }

  return (
    <Stack sx={{ padding: "1rem" }} gap={1}>
      <Stack direction="column" gap={1} alignItems="center">
        <Typography variant="h3" fontWeight={700}>
          {name}
        </Typography>
        <Typography> 🍽️ {cuisines?.join(", ")}</Typography>
        <Typography sx={{ fontWeight: 500 }}>
          {" "}
          🧑‍🤝‍🧑 {costForTwoMessage}
        </Typography>
        <Typography sx={{ fontWeight: 500 }}>⭐ {avgRating}</Typography>
        <Typography sx={{ fontWeight: 500 }}>
          🛵 {sla?.deliveryTime} mins
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1.25rem",
            textDecoration: "underline",
          }}
        >
          Menu
        </Typography>
      </Stack>

      <Stack
        direction="row"
        gap={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {itemCards.map((item, index) => (
          <Stack
            key={index}
            gap={1}
            sx={{
              border: "1px solid black",
              borderRadius: "0.5rem",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.7)",
              backgroundColor: "#f9f9f9",
              width: "13rem",
              height: "100%",
              overflowY: "hidden",
              textOverflow: "ellipsis",
              padding: "1rem",
            }}
          >
            {/* <img
              src={item.card.info.imageSrc}
              alt={item.card.info.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "0.5rem 0.5rem 0 0",
              }}
            /> */}
            <Typography key={index} variant="h6" fontWeight={700}>
              {item.card.info.name}
            </Typography>
            <Typography>
              {item.card.info?.defaultPrice / 100 || 0} Rupees
            </Typography>
            <Typography>{item.card.info.description}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default RestaurantMenu;
