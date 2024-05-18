import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

export const RestaurantCard = (props) => {
  const navigate = useNavigate();
  const propsArr = Object.values(props);

  function onCardClick() {
    navigate(`/restaurants/${props.id}`);
  }

  return (
    <Stack
      sx={{
        width: "18rem",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 1.5rem 1rem 1.5rem",
        transition: "transform 0.3s ease-in-out",
        mb: "1rem",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={onCardClick}
    >
      <div style={{ position: "relative", height: "12rem", width: "17rem" }}>
        <img
          src={props.imgUrl}
          style={{
            objectFit: "cover",

            borderRadius: "1rem",
            alignSelf: "center",
            width: "100%",
            height: "100%",
          }}
          alt="Restaurant"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "8rem",
            background:
              "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 2))",
            borderRadius: "0 0 1rem 1rem",
          }}
        >
          <Typography
            sx={{
              color: "white",
              padding: "0.5rem",
              fontWeight: 400,
              bottom: 2,
              left: 2,
              mt: "4rem",
              ml: "1rem",
              fontFamily: "Poetsen One",
              fontSize: "1.3rem",
            }}
          >
            {propsArr[0]}
          </Typography>
        </Box>
      </div>
      <Box
        sx={{
          marginTop: "0.5rem",
          marginLeft: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            marginBottom: "0.5rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontFamily: "Poetsen One",
            fontSize: "1.2rem",
          }}
        >
          {props.name}
        </Typography>
        {propsArr.slice(1, 4).map((item) => (
          <Typography
            sx={{ fontWeight: 500, fontFamily: "Poetsen One" }}
            key={item}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};
