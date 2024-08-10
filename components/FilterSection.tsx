"use client";
import { Box, Typography } from "@mui/material";
import PillButton from "./PillButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
const FilterSection = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
        <PillButton label="All Filters">
          <FilterListIcon />
        </PillButton>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography>365 results, with Ads</Typography>
          <PillButton label="Sort by:Most relevant">{""}</PillButton>
        </Box>
      </Box>
      {/* second row */}
      <Box
        sx={{
          display: "inline-block",
          bgcolor: "#0e0e0e17",
          p: 1,
          borderRadius: "20px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "13.99px",
              color: "#222",
            }}
          >
            Etsy&#39;s Pick
          </Typography>
          <CloseIcon fontSize="small" />
        </Box>
      </Box>
      {/* third row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "15.99px",
            color: "#222",
          }}
        >
          Etsy&#39;s Picks
        </Typography>
        <PillButton label="See more">{""}</PillButton>
      </Box>
    </>
  );
};

export default FilterSection;
