"use client";
import { Box, Divider, ListItem, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import AdSection from "./AdSection";
import FilterSection from "./FilterSection";
import ListItems from "./ListItems";
import DescriptionSection from "./DescriptionSection";
import EmailSection from "./EmailSection";

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
      <Box sx={{ py: 1, px: { xs: 0, md: 2 } }}>
        <AdSection />
        <Divider />
        <FilterSection />
        <ListItems />
      </Box>
      <DescriptionSection />
      {/* <EmailSection /> */}
    </ThemeProvider>
  );
};

export default HomeSection;
