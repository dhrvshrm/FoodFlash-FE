import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ItemList from "./ItemList";

function ResCategory({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        paddingY: "0.75rem",
        paddingX: "20px",
        width: "60%",
        border: "solid lightgray 1px",
        borderRadius: "0.5rem",
        cursor: "pointer",
        my: "0.85rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="body1"
            fontWeight={500}
            fontSize={18}
            fontFamily="Poetsen One"
          >
            {data?.title} ({data?.itemCards?.length})
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <ItemList itemCards={data?.itemCards} isOpen={expanded} />
      </AccordionDetails>
    </Accordion>
  );
}

export default ResCategory;
