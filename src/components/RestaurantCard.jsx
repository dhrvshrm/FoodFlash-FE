import { Typography } from "@mui/material";

export const RestaurantCard = (props) => {
  const propsArr = Object.values(props);

  return (
    <div
      style={{
        border: "2px solid black",
        width: "15rem",
        cursor: "pointer",
        borderRadius: "1.5rem 1.5rem 0 0",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 1.5rem 1rem 1.5rem",
      }}
    >
      <img
        src={props.imgUrl}
        style={{
          objectFit: "cover",
          height: "12rem",
          width: "14rem",
          borderRadius: "1rem",
          alignSelf: "center",
        }}
        alt="Restaurant"
      />
      <div
        style={{
          marginTop: "1rem",
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
      </div>
    </div>
  );
};
