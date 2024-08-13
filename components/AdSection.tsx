"use client";
import { Box, Chip, Paper, Stack, styled, Typography } from "@mui/material";
import PillButton from "./PillButton";
import Rating from "./Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Image from "next/image";
const AdSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1, md: 4 },
        p: { xs: 0.5, md: 1 },
        mt: 1,
      }}
    >
      {/*mobile ad image */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          position: "relative",
          width: 440,
          height: 160,
          borderRadius: "5px",
        }}
      >
        <Image
          src="/assets/ad.avif"
          alt="Picture of product"
          width={440}
          height={160}
          style={{ borderRadius: "2px", width: "100%", height: "100%" }}
        />

        <CustomIconButton>
          <FavoriteBorderOutlinedIcon />
        </CustomIconButton>
      </Box>
      {/* md ad image */}
      <Box
        sx={{
          position: "relative",
          width: 320,
          height: 200,
          bgcolor: "#0e0e0e17",
          borderRadius: "5px",
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src="/assets/ad.avif"
          alt="Picture of product"
          width={320}
          height={200}
          style={{ borderRadius: "2px", width: "100%", height: "100%" }}
        />

        <CustomIconButton>
          <FavoriteBorderOutlinedIcon />
        </CustomIconButton>
      </Box>

      {/* description */}
      <Box sx={{ width: { xs: 180, md: 700 } }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" }, mb: 0.5 }}
        >
          <Typography sx={{ textDecoration: "underline" }}>efrtau</Typography>
          <Rating count={5} />
          <Typography>(223)</Typography>
        </Stack>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "17.99px",
            overflow: "hidden",
            textOverflow: { xs: "ellipsis", md: "clip" },
            whiteSpace: { xs: "nowrap", md: "normal" },
          }}
        >
          Football Field Pencil Case, Soccer Field Zipper Pouch, Kid&#39;s
          Pencil Case, Back to School, Sport Lover Gift, Student Gift Idea, Gift
          for Kids
        </Typography>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            textDecoration: "underline",
          }}
        >
          efrtau
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "flex", md: "none" }, mb: 0.5 }}
        >
          <Rating count={5} />
          <Typography>(223)</Typography>
        </Stack>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
          }}
        >
          USD 12.00
        </Typography>
        <Chip label="Free Shiping" size="small" color="success" />
        <Box sx={{ my: 2, display: { xs: "none", md: "block" } }}>
          <PillButton label={"Shop this item"}>{""}</PillButton>
        </Box>
        <Box sx={{ my: 2, gap: 2, display: { xs: "flex", md: "none" } }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "13.99px",
            }}
          >
            Shop this item
          </Typography>
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default AdSection;

const CustomIconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        p: 0.5,
        top: 5,
        right: 4,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FFF",
        "&:hover": {
          bgcolor: "#EFF",
          cursor: "pointer",
        },
      }}
    >
      {children}
    </Box>
  );
};
