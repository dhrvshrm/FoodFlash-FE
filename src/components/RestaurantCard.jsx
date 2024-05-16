import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={onCardClick}
    >
      <img
        src={props.imgUrl}
        style={{
          objectFit: "cover",
          height: "12rem",
          width: "17rem",
          borderRadius: "1rem",
          alignSelf: "center",
        }}
        alt="Restaurant"
      />
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
