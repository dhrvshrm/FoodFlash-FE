import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const itemContainerStyle = {
  margin: "1rem auto",
  borderRadius: 5,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
  border: "1px solid lightgray",
  width: "80%",
  height: "11rem",
  px: "2rem",
  pt: "1.6rem",
};

const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

function CartItem({ item }) {
  return (
    <Stack direction="row" sx={itemContainerStyle} gap={2.7}>
      <Stack alignItems="center">
        <img
          src={
            item.imageId !== undefined
              ? `${imgUrl}/${item.imageId}`
              : `https://i.pinimg.com/564x/7a/8a/09/7a8a09abb9c1437904978539764111bd.jpg`
          }
          alt={item.name}
          style={{
            objectFit: "fill",
            height: "9.5rem",
            borderRadius: "0.5rem",
            width: "12rem",
            fontFamily: "Poetsen One",
          }}
        />
      </Stack>
      <Stack direction="column">
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.2rem",
            fontWeight: 500,
            fontFamily: "Poetsen One",
          }}
          title={item.name}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          fontWeight={500}
          sx={{
            fontFamily: "Poetsen One",
          }}
        >
          @ {item.price / 100 || item.defaultPrice / 100}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            fontSize: "1rem",
            fontWeight: 400,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            fontFamily: "Poetsen One",
          }}
        >
          {item.description}
        </Typography>
        <Stack direction="row" gap={1} mt={1} alignItems="center">
          <Box
            sx={{
              height: ".75rem",
              width: ".75rem",
              borderRadius: "50%",
              backgroundColor: item.isVeg ? "green" : "red",
              fontFamily: "Poetsen One",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              color: item.isVeg ? "green" : "red",
              fontFamily: "Poetsen One",
            }}
          >
            {item.isVeg ? "Veg" : "Non-Veg"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

const handleClearCart = () => {
  localStorage.removeItem("cart");
  window.location.reload();
};

function Cart() {
  const { cards } = useSelector((state) => state.card);

  return (
    <Box
      sx={{
        maxWidth: "60rem",
        margin: "20px auto",
        padding: "20px 20px",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid lightgray",
        mt: "4rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          ml: 8,
          fontWeight: 500,
          fontFamily: "Poetsen One",
        }}
      >
        Cart
      </Typography>
      <Stack
        direction="row"
        gap={1}
        sx={{ px: 8, mt: 2, justifyContent: "space-between" }}
      >
        <Typography variant="h6" sx={{ fontFamily: "Poetsen One" }}>
          {cards.length ? "Items" : "Add items to your cart"}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            cursor: "pointer",
            color: "blue",
            "&:hover": {
              textDecoration: "underline",
            },
            fontFamily: "Poetsen One",
          }}
          onClick={handleClearCart}
        >
          {cards.length === 0 ? "" : "Clear Cart"}
        </Typography>
      </Stack>
      {cards && cards.map((item) => <CartItem key={item.id} item={item} />)}
      {cards.length !== 0 && (
        <Button
          variant="outlined"
          sx={{
            margin: "20px auto",
            display: "block",
            textTransform: "none",
            padding: "10px 20px",
            fontSize: "1rem",
          }}
        >
          Proceed to Payment
        </Button>
      )}
    </Box>
  );
}

export default Cart;
