import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearItems } from "../store/slices/cardSlice";
import { styles } from "./cart.styles";

const Cart = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.card);

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  const aggregatedItems = cards.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 1 };
    } else {
      acc[item.id].quantity += 1;
    }
    return acc;
  }, {});

  const aggregatedItemsArray = Object.values(aggregatedItems);

  return (
    <Box sx={styles.cartContainer}>
      <Typography variant="h4" sx={styles.cartTitle}>
        Cart 🛒
      </Typography>
      <Stack
        direction="row"
        gap={1}
        sx={{ px: 8, mt: 2, justifyContent: "space-between" }}
      >
        <Typography variant="h6" sx={styles.cartItemText}>
          {aggregatedItemsArray.length
            ? "Items"
            : "Please add items to your cart."}
        </Typography>
        <Typography
          variant="h6"
          sx={styles.clearCartLink}
          onClick={handleClearCart}
        >
          {aggregatedItemsArray.length === 0 ? "" : "Clear Cart"}
        </Typography>
      </Stack>
      {aggregatedItemsArray.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {aggregatedItemsArray.length !== 0 && (
        <Button variant="contained" sx={styles.paymentButton}>
          Proceed to Payment
        </Button>
      )}
    </Box>
  );
};

export default Cart;
