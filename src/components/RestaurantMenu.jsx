import { Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import NoDataMessage from "./NoDataMsg";
import ResCategory from "./REstaurantCategory";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const params = useParams();
  const { id } = params;
  const { menuData, loading, error } = useRestaurantMenu(id);

  if (loading) return <Shimmer count={12} />;
  if (error)
    return <Typography sx={{ fontFamily: "Poetsen One" }}>{error}</Typography>;

  const {
    cuisines,
    name,
    costForTwoMessage,
    avgRating,
    sla,
    labels,
    areaName,
    totalRatingsString,
    feeDetails,
  } = menuData.cards[2].card.card.info;
  console.log({ feeDetails });

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
    return <NoDataMessage type="noMenuData" />;
  }

  if (!itemCards || itemCards.length === 0) {
    return <NoDataMessage type="noItems" />;
  }

  console.log({ menuCard: menuData.cards[2].card.card.info });

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
      value: `${avgRating} (${totalRatingsString})` || "N/A",
      emoji: "⭐",
    },
    {
      title: "Delivery time",
      // eslint-disable-next-line no-useless-concat
      value:
        sla?.minDeliveryTime + "-" + sla?.maxDeliveryTime + " mins" || "N/A",
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
      <Stack
        gap={3}
        alignItems="left"
        direction="column"
        width="60%"
        p={2}
        ml={5}
      >
        <Stack direction="column">
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              fontFamily: "Poetsen One",
              fontSize: "1.5rem",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={100}
            sx={{
              fontFamily: "Poetsen One",
              fontSize: "1rem",
            }}
          >
            📍 {labels[1].message.replaceAll(",", ", ")}
          </Typography>
        </Stack>
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
          <Stack sx={{ m: 3 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Poetsen One" }}
            >
              Very far {sla.lastMileTravelString} from {areaName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Poetsen One" }}
            >
              Extra charges will be applied upto {feeDetails?.totalFee / 100} ₹
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {filteredCategoryCards.map((category) => (
        <ResCategory data={category?.card?.card} key={category.id} />
      ))}
    </Stack>
  );
}

export default RestaurantMenu;
