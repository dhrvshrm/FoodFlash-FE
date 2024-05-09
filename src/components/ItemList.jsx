import { Box, Stack, Typography } from "@mui/material";

function ItemList({ itemCards }) {
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
          }}
        >
          <Box>
            <Typography variant="body1" fontWeight={700}>
              {item?.card?.info?.name} @ {item?.card?.info?.defaultPrice / 100}{" "}
              Rupees
            </Typography>
            <Typography variant="body2" sx={{ color: "black" }}>
              {item?.card?.info?.description} -{" "}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}

export default ItemList;
