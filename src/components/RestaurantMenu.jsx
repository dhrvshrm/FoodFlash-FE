import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGeolocation } from "../hooks/useGeoLocation";
import { setUserArea } from "../store/slices/userInfoSlice";
import NoDataMessage from "./NoDataMsg";
import ResCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const params = useParams();
  const { id } = params;
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { latitude, longitude } = useGeolocation();
  const dispatch = useDispatch();

  const infoData = menuData.cards?.[2]?.card?.card?.info || {};
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
  } = infoData;

  console.log({ areaName });

  useEffect(() => {
    dispatch(setUserArea(areaName));
  }, [areaName, dispatch]);

  const { itemCards } =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  const categoryCards =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}`;
        const response = await fetch(URL);
        const data = await response.json();
        setMenuData(data?.data || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    }
    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
  }, [latitude, longitude, id]);

  if (loading) return <Shimmer count={12} />;
  if (error)
    return <Typography sx={{ fontFamily: "Poetsen One" }}>{error}</Typography>;

  if (!menuData || !menuData.cards || !menuData.cards[2]?.card?.card?.info) {
    return <NoDataMessage type="noMenuData" />;
  }

  if (!itemCards || itemCards.length === 0) {
    return <NoDataMessage type="noItems" />;
  }

  const filteredCategoryCards = categoryCards?.filter(
    (category) =>
      category.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

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
      value:
        sla?.minDeliveryTime && sla?.maxDeliveryTime
          ? `${sla.minDeliveryTime}-${sla.maxDeliveryTime} mins`
          : "N/A",
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
            📍 {labels?.[1]?.message?.replaceAll(",", ", ") || "N/A"}
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
              {sla?.lastMileTravelString} far from {areaName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Poetsen One" }}
            >
              Extra charges will be applied up to {feeDetails?.totalFee / 100} ₹
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
