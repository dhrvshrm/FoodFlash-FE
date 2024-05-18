import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/slices/cardSlice";

function ItemList({ itemCards, isOpen }) {
  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;
  const dispatch = useDispatch();
  const [clickedItem, setClickedItem] = useState(null);
  const [itemQuantity, setItemQuantity] = useState({});

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleQuantityChange = (itemId, quantity) => {
    setItemQuantity({ ...itemQuantity, [itemId]: quantity });
  };

  return (
    <Stack
      sx={{
        transition: "height 0.3s ease-in-out",
        height: isOpen ? "fit-content" : 0,
        overflow: "hidden",
        paddingY: "1.6rem",
      }}
    >
      {itemCards?.map((item) => (
        <Stack
          key={item.card.info.id}
          direction="row"
          sx={{
            paddingY: "16px",
            paddingX: "20px",
            justifyContent: "space-between",
            border: "solid lightgray 1px",
            alignItems: "center",
            borderRadius: "0.5rem",
            cursor: "pointer",
            my: "1.75rem",
            mx: "1rem",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
            "&:hover": {
              transform: "scale(1.02)",
            },
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <Stack direction="row" gap={3}>
            <Box
              sx={{
                borderRadius: "0.5rem",
                width: "12rem",
                height: "8.5rem",
                border: "solid lightgray 1px",
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <img
                src={
                  item?.card?.info.imageId !== undefined
                    ? `${imgUrl}/${item?.card?.info.imageId}`
                    : `https://i.pinimg.com/564x/7a/8a/09/7a8a09abb9c1437904978539764111bd.jpg`
                }
                alt={item?.card?.info?.name}
                style={{
                  objectFit: "fill",
                  width: "12rem",
                  height: "8.5rem",
                  borderRadius: "0.5rem",
                  position: "relative",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  width: "fit-content",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingX: "0.5rem",
                  border: "solid green 1px",
                  backgroundColor:
                    clickedItem === item.card.info.id ? "green" : "white",
                }}
                onClick={() => {
                  handleAddToCart(item.card.info);
                  setClickedItem(item.card.info.id);
                  handleQuantityChange(
                    item.card.info.id,
                    (itemQuantity[item.card.info.id] || 0) + 1
                  );
                }}
              >
                <Stack direction="row" sx={{ alignItems: "center" }} gap={0.5}>
                  <Typography
                    variant="body1"
                    fontWeight={400}
                    sx={{
                      fontFamily: "Poetsen One",
                      color:
                        clickedItem === item.card.info.id ? "white" : "green",
                    }}
                  >
                    Add
                  </Typography>
                  <AddCircleOutlineIcon
                    sx={{
                      color:
                        clickedItem === item.card.info.id ? "white" : "green",
                      fontSize: "1rem",
                    }}
                  />
                </Stack>
              </Box>
            </Box>
            <Stack
              direction="column"
              sx={{
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="body1"
                fontWeight={600}
                sx={{
                  fontFamily: "Poetsen One",
                }}
              >
                {item?.card?.info?.name} @{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
                ₹
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontFamily: "Poetsen One" }}
                fontWeight={500}
              >
                {item?.card?.info?.description} -{" "}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontFamily: "Poetsen One" }}
              >
                Quantity: {itemQuantity[item.card.info.id] || 0}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default ItemList;
