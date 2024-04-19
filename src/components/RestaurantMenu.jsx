import React from "react";
import { Typography, Stack } from "@mui/material";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";

function RestaurantMenu() {
  const params = useParams();
  const { id } = params;
  const { menuData, loading, error } = useRestaurantMenu(id);
  const { cuisines, name, costForTwoMessage, avgRating, sla } =
    menuData.cards[2].card.card.info;
  const { itemCards } =
    menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  if (loading) return <Shimmer count={12} />;

  if (error) return <Typography>{error}</Typography>;

  if (!menuData || !menuData.cards || !menuData.cards[2]?.card?.card?.info) {
    return <Typography>No menu data available</Typography>;
  }

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
