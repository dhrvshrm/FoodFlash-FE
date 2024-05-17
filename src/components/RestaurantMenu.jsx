import { Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import ResCategory from "./REstaurantCategory";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const params = useParams();
  const { id } = params;
  const { menuData, loading, error } = useRestaurantMenu(id);

  if (loading) return <Shimmer count={12} />;
  if (error)
    return <Typography sx={{ fontFamily: "Poetsen One" }}>{error}</Typography>;

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
    return (
      <Typography
        sx={{
          padding: "1rem",
          margin: "1rem",
          border: "1px solid #000",
          borderRadius: "0.5rem",
          fontFamily: "Poetsen One",
        }}
      >
        No menu data available
      </Typography>
    );
  }

  if (!itemCards || itemCards.length === 0) {
    return (
      <Typography
        sx={{
          padding: "1rem",
          marginTop: "10rem",
          textAlign: "center",
          fontWeight: 500,
          fontSize: "1.5rem",
          fontFamily: "Poetsen One",
        }}
      >
        No items available in the menu
      </Typography>
    );
  }

  const restaurantInfo = [
    {
      title: "Cuisines",
      value: cuisines?.join(", ") || "N/A",
      emoji: "🍽️",
    },
    {
      title: "Cost for two",
      value: costForTwoMessage || "N/A",
      emoji: "🧑‍🤝‍🧑",
    },
    {
      title: "Rating",
      value: avgRating || "N/A",
      emoji: "⭐",
    },
    {
      title: "Delivery time",
      value: sla?.deliveryTime || "30" + " mins",
      emoji: "🛵",
    },
  ];

  return (
    <Stack
      sx={{ padding: "1rem", my: 3 }}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stack gap={3} alignItems="left" direction="column" width="60%" p={2}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            fontFamily: "Poetsen One",
            fontSize: "1.5rem",
            ml: 5,
          }}
        >
          {name}
        </Typography>
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          width="100%"
          sx={{
            borderRadius: "1rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ul>
            {restaurantInfo.map((item, index) => (
              <Stack key={index}>
                <Typography
                  sx={{ fontFamily: "Poetsen One" }}
                  fontWeight={300}
                  mb={1}
                >
                  {item.emoji} {item.value}
                </Typography>
              </Stack>
            ))}
          </ul>
        </Stack>
      </Stack>
      {filteredCategoryCards.map((category) => (
        <ResCategory data={category?.card?.card} key={category.id} />
      ))}
    </Stack>
  );
}

export default RestaurantMenu;
