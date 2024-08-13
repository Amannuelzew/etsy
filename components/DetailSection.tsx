"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import Product from "./Product";
import { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { DUMMY_DATA } from "@/utils/constants";
import DescriptionSection from "./DescriptionSection";
import EmailSection from "./EmailSection";
import FooterSection from "./FooterSection";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "sans-serif",
    },
  },
});

const DetailSection = () => {
  const path = usePathname();
  console.log(path);
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const product = DUMMY_DATA.filter(
    (product) => product.product_id === path.split("/")[2]
  )[0];
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
      <Breadcrumb />
      <Product product={product} />
      <DescriptionSection />
      <EmailSection />
      <footer>
        <FooterSection />
      </footer>
    </ThemeProvider>
  );
};

export default DetailSection;
