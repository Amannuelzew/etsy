"use client";
import { Box, Typography } from "@mui/material";
import PillButton from "./PillButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

const FilterSection = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <PillButton label="All Filters">
          <FilterListIcon />
        </PillButton>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography>365 results, with Ads</Typography>
          <PillButton label="Sort by:Most relevant">{""}</PillButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "end",
          mt: 1,
          p: 1,
        }}
      >
        <FilterListIcon sx={{ borderRadius: "50%", border: 1 }} />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          gap: 1,
          p: 1,
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Typography>365 results for &#39;soccer &#39; with ads</Typography>
      </Box>
      {/* second row */}
      <Box
        sx={{
          display: "inline-block",
          bgcolor: "#0e0e0e17",
          p: 1,
          borderRadius: "20px",
          mx: { xs: 2, md: 0 },
          mt: 1,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
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
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          my: 1,
        }}
      >
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
