"use client";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import AdSection from "./AdSection";
import FilterSection from "./FilterSection";
import ListItems from "./ListItems";
import DescriptionSection from "./DescriptionSection";
import EmailSection from "./EmailSection";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
  },
});
const HomeSection = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      {open ? (
        <>
          <Typography
            sx={{
              color: "red",
              textAlign: "center",
              fontSize: "22px",
              fontWeight: 700,
              bgcolor: "lightblue",
            }}
          >
            Disclaimer:Educational Use Only
          </Typography>
          <Grid container sx={{ bgcolor: "lightblue", p: 2 }}>
            <Grid item xs={11}>
              <Typography
                sx={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "17px",
                  fontWeight: 400,
                }}
              >
                This website is a clone and does not represent the official
                website of{" "}
                <Link style={{ color: "" }} href="etsy.com">
                  etsy.com
                </Link>{" "}
                .All content, images, and trademarks belong to their respective
                owners. This website is for educational and research purposes
                only. No copyright infringement is intended.
              </Typography>
            </Grid>
            <Grid
              xs={1}
              sx={{
                mt: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <IconButton onClick={handleOpen}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
      <Navbar />
      <Box sx={{ px: { xs: 0, md: 2 } }}>
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
