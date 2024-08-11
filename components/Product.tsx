"use client";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Rating from "./Rating";
import DoneIcon from "@mui/icons-material/Done";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import FlagIcon from "@mui/icons-material/Flag";
import Image from "next/image";
import { Fragment } from "react";

type productProps = {
  product_id: string;
  product_title: string;
  product_price: number;
  product_description: string;
  product_rating: number;
  detail_images: string[];
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
const Product = ({ product }: { product: productProps }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 5 }}
      sx={{ px: { xs: 0, md: 5 }, py: { xs: 0, md: 4 } }}
    >
      <Grid item xs={12} md={8} container spacing={6} sx={{}}>
        <Grid item md={1} sx={{ display: { xs: "none", md: "block" } }}>
          <Stack>
            {product.detail_images.map((item, index) => (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "6px",
                  width: "60px",
                  height: "60px",
                  mb: 1,
                }}
                key={index}
              >
                <Image
                  src={item}
                  alt={product.product_title}
                  width={60}
                  height={60}
                  objectFit="fit"
                  style={{ borderRadius: "6px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.5)",
                  }}
                ></Box>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={11}>
          <Box
            sx={{
              position: "relative",
              width: 770,
              height: 500,
              borderRadius: "5px",
              display: { xs: "none", md: "block" },
            }}
          >
            <Image
              src={product.image_url}
              alt={product.product_title}
              width={770}
              height={500}
              style={{ borderRadius: "2px" }}
            />
            <CustomIconButton top={5} right={4}>
              <FavoriteBorderOutlinedIcon />
            </CustomIconButton>
            <CustomIconButton top={200} left={6}>
              <ChevronLeft />
            </CustomIconButton>
            <CustomIconButton top={200} right={6}>
              <ChevronRight />
            </CustomIconButton>
          </Box>
          {/* mobile image preview */}
          <Box
            sx={{
              position: "relative",
              height: 400,
              borderRadius: "5px",
              display: { xs: "block", md: "none" },
            }}
          >
            <div style={{ width: "100%" }}>
              <Image
                src={product.image_url}
                alt={product.product_title}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "2px" }}
              />
            </div>
            <CustomIconButton top={5} right={4}>
              <FavoriteBorderOutlinedIcon />
            </CustomIconButton>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
              gap: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {[...Array.from({ length: 8 }, (_, i) => i)].map((item, index) => (
              <Fragment key={index}>
                {index === 0 ? (
                  <Box
                    width={10}
                    height={10}
                    sx={{ borderRadius: "50%", bgcolor: "black" }}
                  ></Box>
                ) : (
                  <Box
                    width={10}
                    height={10}
                    sx={{ borderRadius: "50%", bgcolor: "grey.400" }}
                  ></Box>
                )}
              </Fragment>
            ))}
          </Box>
          {/* info */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "end",
                my: 2,
              }}
            >
              <FlagIcon />
              <Typography
                sx={{
                  textDecoration: "underline",
                  fontFamily: "sans-serif",
                  textAlign: "center",
                  fontSize: "13.99px",
                }}
              >
                Report this item to Etsy
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", my: 2 }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12.99px",
                    fontWeight: "800",
                  }}
                >
                  Other reviews from this shop|
                </Typography>
                <Rating count={5} />
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    fontSize: "13.99px",
                  }}
                >
                  (31)
                </Typography>
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "11.99px",
                  fontWeight: "800",
                }}
              >
                Sort by:Suggested
              </Typography>
            </Box>
            <Rating count={product.product_rating} />
            <Grid container spacing={1} sx={{ my: 2 }}>
              <Grid item md={8}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "13.99px",
                    mb: 1,
                  }}
                >
                  This review comes so late but Dovile was so amazing and
                  thoughtful and the necklace is perfect!
                </Typography>
              </Grid>
              <Grid item md={4} sx={{}}>
                <Stack>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      gap: 1,
                    }}
                  >
                    <Typography>item quantity 5</Typography>
                    <Rating count={1} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      gap: 1,
                    }}
                  >
                    <Typography>shipping 5</Typography>
                    <Rating count={1} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      gap: 1,
                    }}
                  >
                    <Typography>customer service 5</Typography>
                    <Rating count={1} />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column", mx: { xs: 2, md: 0 } }}
      >
        <Typography
          sx={{ fontWeight: "700", fontSize: "12.99px", color: "red" }}
        >
          Rare find
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "20.99px",
          }}
        >
          {" "}
          USD {product.product_price}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14.99px",
            color: "gray",
            my: 1,
          }}
        >
          Local taxes included(where applicable)
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "17.99px",
            mb: 1,
          }}
        >
          {product.product_description}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, my: 1 }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "13.99px",
            }}
          >
            {product.owner}
          </Typography>
          <Rating count={product.product_rating} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 1 }}>
          <DoneIcon sx={{ color: "lightblue" }} />
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14.99px",
              color: "gray",
              my: 1,
            }}
          >
            Returns & exchanges accepted
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            bgcolor: "black",
            "&:hover": { bgcolor: "#111" },
          }}
        >
          Add to cart
        </Button>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
            mt: 5,
          }}
        >
          Item details
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
            mt: 3,
          }}
        >
          Highlights
        </Typography>
        {/* made by */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <WavingHandIcon fontSize="small" />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 0.5 }}>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16.99px",
              }}
            >
              Made by{" "}
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17.99px",
                my: 1,
              }}
            >
              DreamBeadsDovi
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 0.5 }}>
          <AutoAwesomeIcon />
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14.99px",
            }}
          >
            Material:Glass
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 0.5 }}>
          <InsertLinkIcon />
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14.99px",
            }}
          >
            Chain style:Bead
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 0.5 }}>
          <ChangeHistoryIcon />
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14.99px",
            }}
          >
            Necklace length:42 Centimeters
          </Typography>
        </Box>
        {/* about team */}
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14.99px",
            mt: 3,
          }}
        >
          About this team
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "15.99px",
            mb: 1,
          }}
        >
          Soccer Ball Necklace-Football Beaded Necklace-soccer Fans Gift-Soccer
          Ball Charm Necklace-Ball Charm-Football Charm Necklace-Green Necklace
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Product;

const CustomIconButton = ({
  children,
  top,
  right,
  bottom,
  left,
}: {
  children: React.ReactNode;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        p: 0.5,
        top: top,
        right: right,
        left: left,
        bottom: bottom,
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
