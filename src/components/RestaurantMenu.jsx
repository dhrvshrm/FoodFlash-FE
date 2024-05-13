import React, { useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { useOnlineStatus } from "../hooks/uesOnlineStatus";
import ResCategory from "./REstaurantCategory";

function RestaurantMenu() {
  const params = useParams();
  const { id } = params;
  const { menuData, loading, error } = useRestaurantMenu(id);
  const { isOnline } = useOnlineStatus();

  if (loading) return <Shimmer count={12} />;
  if (error) return <Typography>{error}</Typography>;

  const { cuisines, name, costForTwoMessage, avgRating, sla } =
    menuData.cards[2].card.card.info;

  const { itemCards } =
    menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  const categoryCards =
    menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredCategoryCards = categoryCards.filter(
    (category) =>
      category.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (!menuData || !menuData.cards || !menuData.cards[2]?.card?.card?.info) {
    return <Typography>No menu data available</Typography>;
  }

  if (!itemCards || itemCards.length === 0) {
    return <Typography>No items available in the menu</Typography>;
  }

  return (
    <Stack sx={{ padding: "1rem", my: 3 }} gap={1}>
      <Stack>
        <Stack gap={1} alignItems="center" direction="column">
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
      </Stack>
      {filteredCategoryCards.map((category) => (
        <ResCategory data={category?.card?.card} key={category.id} />
      ))}
    </Stack>
  );
}

export default RestaurantMenu;
