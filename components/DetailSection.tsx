"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
  },
});

const DetailSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Breadcrumb />
    </ThemeProvider>
  );
};

export default DetailSection;
