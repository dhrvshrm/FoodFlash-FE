import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { STYLES } from "./restaurantCard.styles";

export const RestaurantCard = (props) => {
  const navigate = useNavigate();
  const propsArr = Object.values(props);
  const discountObj = props?.aggregatedDiscountInfoV3;
  const { header, subHeader } = discountObj || { header: "", subHeader: "" };

  function onCardClick() {
    navigate(`/restaurants/${props.id}`);
  }

  return (
    <Stack sx={STYLES.cardContainer} onClick={onCardClick}>
      <div style={STYLES.imageContainer}>
        <img src={props.imgUrl} style={STYLES.image} alt="Restaurant" />
        <Box sx={STYLES.overlay}>
          <Typography sx={STYLES.overlayText}>
            {header} {subHeader}
          </Typography>
        </Box>
      </div>
      <Box sx={STYLES.detailsContainer}>
        <Typography sx={STYLES.restaurantName}>{props.name}</Typography>
        {propsArr.slice(1, 4).map((item) => (
          <Typography sx={STYLES.additionalInfo} key={item}>
            {item}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};
