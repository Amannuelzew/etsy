"use client";
import { Box, Chip, Paper, Stack, styled, Typography } from "@mui/material";
import PillButton from "./PillButton";
import Rating from "./Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const AdSection = () => {
  return (
    <Box sx={{ display: "flex", gap: 4, p: 1 }}>
      {/* preview image */}
      <Box
        sx={{
          position: "relative",
          width: 320,
          height: 200,
          bgcolor: "#0e0e0e17",
          borderRadius: "5px",
        }}
      >
        <CustomIconButton>
          <FavoriteBorderOutlinedIcon />
        </CustomIconButton>
      </Box>
      {/* description */}
      <Box sx={{ width: 700 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 0.5 }}>
          <Typography sx={{ textDecoration: "underline" }}>efrtau</Typography>
          <Rating count={5} />
          <Typography>(223)</Typography>
        </Stack>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "17.99px",
          }}
        >
          Football Field Pencil Case, Soccer Field Zipper Pouch, Kid&#39;s
          Pencil Case, Back to School, Sport Lover Gift, Student Gift Idea, Gift
          for Kids
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
          }}
        >
          USD 12.00
        </Typography>
        <Chip label="Free Shiping" size="small" color="success" />
        <Box sx={{ my: 2 }}>
          <PillButton label={"Shop this item"}>{""}</PillButton>
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
