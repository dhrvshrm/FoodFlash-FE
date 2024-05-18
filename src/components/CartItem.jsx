import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { styles } from "../pages/cart.styles";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/slices/cardSlice";

export const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <Stack direction="row" sx={styles.itemContainer} gap={2.7}>
      <Stack alignItems="center">
        <img
          src={
            item.imageId !== undefined
              ? `${imgUrl}/${item.imageId}`
              : `https://i.pinimg.com/564x/7a/8a/09/7a8a09abb9c1437904978539764111bd.jpg`
          }
          alt={item.name}
          style={styles.itemImage}
        />
      </Stack>
      <Stack direction="column">
        <Typography variant="h6" sx={styles.itemName} title={item.name}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={styles.itemPrice}>
          @ {item.price / 100 || item.defaultPrice / 100}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={styles.itemDescription}
        >
          {item.description}
        </Typography>
        <Stack direction="row" gap={1} mt={1} alignItems="center">
          <Box
            sx={{
              ...styles.vegIndicator,
              backgroundColor: item.isVeg ? "green" : "red",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              ...styles.vegText,
              color: item.isVeg ? "green" : "red",
            }}
          >
            {item.isVeg ? "Veg" : "Non-Veg"}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" mt={1}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Poetsen One",
            }}
          >
            Quantity: {item.quantity}
          </Typography>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartItem;
