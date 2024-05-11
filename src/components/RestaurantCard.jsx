import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RestaurantCard = (props) => {
  const navigate = useNavigate();
  const propsArr = Object.values(props);
  function onCardClick() {
    navigate(`/restaurants/${props.id}`);
  }

  return (
    <div
      style={{
        width: "18rem",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 1.5rem 1rem 1.5rem",
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
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.2rem",
          }}
        >
          {props.name}
        </Typography>
        {propsArr.slice(1, 4).map((item) => (
          <Typography
            sx={{ fontWeight: 500, fontFamily: "Raleway, sans-serif" }}
            key={item}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </div>
  );
};
