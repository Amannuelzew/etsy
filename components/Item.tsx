"use client";
import { Box, Stack, Typography } from "@mui/material";
import Rating from "./Rating";
import Link from "next/link";
import Image from "next/image";
const Item = ({ image }: { image: boolean }) => {
  return (
    <Link href="listing/1" style={{ textDecoration: "none", color: "#000" }}>
      <Stack
        sx={{
          borderRadius: "2px",
          p: 1,
          "&:hover": {
            cursor: "pointer",
            boxShadow: 8,
          },
        }}
      >
        <Box
          sx={{
            width: 190,
            height: 170,
            borderRadius: "2px",
            bgcolor: "#0e0e0e17",
          }}
        >
          {image ? (
            <Image
              src="/assets/main.webp"
              alt="Picture of product"
              width={190}
              height={170}
              style={{ borderRadius: "2px" }}
            />
          ) : (
            ""
          )}
        </Box>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16.99px",
          }}
        >
          Personalized Soccer Ball Not....
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Rating count={5} />
          <Typography>(20.1K) </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
          }}
        >
          USD 18.00
        </Typography>
        <Typography
          sx={{
            fontSize: "14.99px",
            color: "#444",
          }}
        >
          DesigningMoments
        </Typography>
      </Stack>
    </Link>
  );
};

export default Item;
