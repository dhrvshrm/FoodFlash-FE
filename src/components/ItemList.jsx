import { Box, Stack, Typography } from "@mui/material";

function ItemList({ itemCards }) {
  console.log("itemCards", itemCards);

  const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

  return (
    <Stack>
      {itemCards?.map((item) => (
        <Stack
          direction="row"
          sx={{
            paddingY: "16px",
            paddingX: "20px",
            backgroundColor: "#f9f9f9",
            justifyContent: "space-between",
            height: "8rem",
            border: "solid lightgray 1px",
            alignItems: "center",
            borderRadius: "0.5rem",
            cursor: "pointer",
            my: "1.2rem",
          }}
        >
          <Stack direction="row" gap={2}>
            <Box
              sx={{
                backgroundColor: "lightgray",
                borderRadius: "0.5rem",
                width: "7.2rem",
                height: "7.2rem",
              }}
            >
              <img
                src={`${imgUrl}/${item?.card?.info?.imageId}`}
                alt={item?.card?.info?.name}
                style={{
                  objectFit: "cover",
                  width: "7.2rem",
                  height: "7.2rem",
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
              <Typography variant="body1" fontWeight={700}>
                {item?.card?.info?.name} @{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
                $
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
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
