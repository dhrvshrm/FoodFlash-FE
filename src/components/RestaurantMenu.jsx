import React, { useEffect, useState } from "react";
import { Typography, Stack, Grid } from "@mui/material";

function RestaurantMenu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=45606&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
      );
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

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  if (!menuData || !menuData.cards || !menuData.cards[2]?.card?.card?.info) {
    return <Typography>No menu data available</Typography>;
  }

  const { cuisines, name, costForTwoMessage, avgRating, sla } =
    menuData.cards[2].card.card.info;
  const { itemCards } =
    menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || [];

  return (
    <Stack sx={{ padding: "1rem" }} gap={1}>
      <Typography variant="h4" fontWeight={700}>
        {name}
      </Typography>
      <Typography>Cuisines: {cuisines?.join(", ")}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{costForTwoMessage}</Typography>
      <Typography sx={{ fontWeight: 500 }}>Rating: {avgRating}</Typography>
      <Typography sx={{ fontWeight: 500 }}>
        Delivery Time: {sla?.deliveryTime} mins
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>Menu:</Typography>

      {itemCards.map((item, index) => (
        <Grid
          key={index}
          gap={1}
          sx={{
            border: "1px solid black",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.7)",
            backgroundColor: "#f9f9f9",
            margin: "0.5rem 0",
          }}
          direction="row"
        >
          <Typography key={index} variant="h6" fontWeight={700}>
            {item.card.info.name}
          </Typography>
          <Typography>
            {" "}
            {item.card.info?.defaultPrice / 100 || 0} Rupees
          </Typography>

          <Typography>{item.card.info.description}</Typography>
        </Grid>
      ))}
    </Stack>
  );
}

export default RestaurantMenu;
