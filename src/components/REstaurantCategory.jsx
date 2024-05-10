import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import ItemList from "./ItemList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660`;

function ResCategory({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrowClick = () => {
    console.log("Arrow clicked");
    setIsOpen((prev) => !prev);
  };

  return (
    <Stack
      direction="column"
      sx={{
        paddingY: "16px",
        paddingX: "20px",
        width: "50%",
        border: "solid lightgray 1px",
        justifyContent: "space-between",
        borderRadius: "0.5rem",
        cursor: "pointer",
        alignSelf: "center",
        my: "1.2rem",
      }}
    >
      <Stack
        onClick={handleArrowClick}
        gap={1}
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" fontWeight={700}>
          {data?.title} ({data?.itemCards?.length})
        </Typography>
        <KeyboardArrowDownIcon
          cursor="pointer"
          sx={{
            rotate: isOpen ? "180deg" : "0deg",
          }}
        />
      </Stack>
      {isOpen && <ItemList itemCards={data?.itemCards} />}
    </Stack>
  );
}

export default ResCategory;