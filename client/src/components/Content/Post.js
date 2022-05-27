import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Post from "./Post.css";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      elevation={3}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{
        "&:hover": {
          backgroundColor: "#eeeeee",
        },
      }}
    >
      <AccordionSummary
        className="fancy_card"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>05/12/22</Typography>

        <Typography sx={{ width: "95%", color: "text.secondary" }}>
          I was being chased by a monkey..
        </Typography>
        <Typography sx={{ flexShrink: 0, px: 1 }}>User</Typography>
        <Avatar sx={{ width: 24, height: 24 }} />
      </AccordionSummary>

      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus
          sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
          id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
          quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam. Nulla facilisi. Phasellus
          sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
          id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}