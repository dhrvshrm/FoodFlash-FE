import { Box, Stack, Typography } from "@mui/material";

function ItemList({ itemCards }) {
  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

  return (
    <Stack>
      {itemCards?.map((item) => (
        <Stack
          direction="row"
          sx={{
            paddingY: "16px",
            paddingX: "20px",
            justifyContent: "space-between",
            height: "10rem",
            border: "solid lightgray 1px",
            alignItems: "center",
            borderRadius: "0.5rem",
            cursor: "pointer",
            my: "1.75rem",
            mx: "1rem",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
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
                }}
              />
            </Box>
            <Stack
              direction="column"
              sx={{
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography variant="body1" fontWeight={600}>
                {item?.card?.info?.name} @{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
                ₹
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black" }}
                fontWeight={500}
              >
                {item?.card?.info?.description} -{" "}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default ItemList;
