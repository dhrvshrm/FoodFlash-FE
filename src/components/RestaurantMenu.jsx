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

  return (
    <Stack sx={{ padding: "1rem", my: 3 }} gap={1}>
      <Stack>
        <Stack gap={1} alignItems="center" direction="column" s>
          <Typography
            variant="h3"
            fontWeight={500}
            sx={{ fontFamily: "Poetsen One" }}
          >
            {name}
          </Typography>
          <Stack
            gap={4}
            alignItems="center"
            direction="row"
            justifyContent="center"
            width="100%"
          >
            <Typography sx={{ fontFamily: "Poetsen One" }}>
              {" "}
              🍽️ {cuisines?.join(", ")}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontFamily: "Poetsen One" }}>
              {" "}
              🧑‍🤝‍🧑 {costForTwoMessage}
            </Typography>
          </Stack>

          <Stack
            gap={20}
            width="100%"
            alignItems="center"
            direction="row"
            justifyContent="center"
          >
            <Typography sx={{ fontWeight: 400, fontFamily: "Poetsen One" }}>
              ⭐ {avgRating}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontFamily: "Poetsen One" }}>
              🛵 {sla?.deliveryTime} mins
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              textDecoration: "underline",
              fontFamily: "Poetsen One",
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
