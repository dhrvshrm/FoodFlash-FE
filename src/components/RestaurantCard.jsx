import { Typography } from "@mui/material";

export const RestaurantCard = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        textAlign: "center",
        width: "17rem",
      }}
    >
      <img
        src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711843200&semt=sph"
        style={{
          objectFit: "cover",
          marginX: "1rem",
          marginTop: "1rem",
          height: "12rem",
          width: "14rem",
        }}
        alt="restaurant"
      />
      <div style={{ lineHeight: "0.2rem", paddingBottom: "0.5rem" }}>
        <Typography variant="h6">{props.name}</Typography>
        <Typography variant="subtitle1">{props.cuisine}</Typography>
        <Typography variant="subtitle2">{props.rating}</Typography>
        <Typography variant="subtitle2">{props.deliveryTime}</Typography>
      </div>
    </div>
  );
};
