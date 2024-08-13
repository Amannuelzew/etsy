"use client";
import { Box, Stack, Typography } from "@mui/material";
import Rating from "./Rating";
import Link from "next/link";
import Image from "next/image";
type dataProps = {
  product_id: string;
  product_title: string;
  product_price: number;
  product_description: string;
  product_rating: number;
  product_views_count: number;
  owner: string;
  category: string;
  brand: string;
  available_quantity: number;
  image_url: string;
  discount_percentage: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};
const Item = ({ item }: { item: dataProps }) => {
  return (
    <Link
      href={`listing/${item.product_id}`}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <Stack
        sx={{
          borderRadius: "2px",
          p: 0.5,
          "&:hover": {
            cursor: "pointer",
            boxShadow: 8,
          },
        }}
      >
        {/* mobile view */}
        <Box
          sx={{
            width: "100%",
            height: 150,
            borderRadius: "6px",
            display: { xs: "block", md: "none" },
          }}
        >
          <Image
            src={item.image_url}
            alt={item.product_title}
            width={200}
            height={150}
            style={{ borderRadius: "2px", width: "100%", height: "100%" }}
          />
        </Box>
        {/* md view */}
        <Box
          sx={{
            width: 210,
            height: 170,
            borderRadius: "2px",
            display: { xs: "none", md: "block", width: "100%", height: "100%" },
          }}
        >
          <Image
            src={item.image_url}
            alt={item.product_title}
            width={210}
            height={170}
            style={{ borderRadius: "2px" }}
          />
        </Box>

        <Typography
          sx={{
            mt: 1,
            fontWeight: "500",
            fontSize: "16.99px",
          }}
        >
          {item.product_title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Rating count={item.product_rating} />
          <Typography>({item.product_views_count}) </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
          }}
        >
          USD {item.product_price}
        </Typography>
        <Typography
          sx={{
            fontSize: "14.99px",
            color: "#444",
          }}
        >
          {item.owner}
        </Typography>
      </Stack>
    </Link>
  );
};

export default Item;
