"use client";
import { Box, Divider, Paper } from "@mui/material";
import Navbar from "@/components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import AdComponent from "./AdComponent";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
  },
});
const HomeComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ py: 1, px: 6 }}>
        <AdComponent />
        <Divider />
      </Box>
    </ThemeProvider>
  );
};

export default HomeComponent;
