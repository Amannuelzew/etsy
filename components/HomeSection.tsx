"use client";
import { Box, Divider, Paper, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import AdSection from "./AdSection";
import FilterSection from "./FilterSection";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
  },
});
const HomeSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ py: 1, px: 6 }}>
        <AdSection />
        <Divider />
        <FilterSection />
      </Box>
    </ThemeProvider>
  );
};

export default HomeSection;
