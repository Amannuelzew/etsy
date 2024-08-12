import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
const shop = [
  "Gift cards",
  "Etsy Registry",
  "Sitemap",
  "Etsy blog",
  "Etsy United Kingdom",
  "Etsy Germany",
  "Etsy Canada",
];
const sell = ["Sell on Etsy", "Teams", "Forums", "Affiliates & Creators"];
const about = [
  "Etsy, Inc.",
  "Policies",
  "Investors",
  "Careers",
  "Press",
  "Impact",
  "Legal imprint",
];
const help = ["Help Center", "Privacy settings"];
const footer = [
  " © 2024 Etsy, Inc.",
  "Terms of Use ",
  "Privacy",
  "Interest-basedads",
  "Local Shops",
  "Regions",
];
const FooterSection = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#CCEBFF" }}>
        <Grid container>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "blue",
              p: 15,
            }}
          >
            <Box
              bgcolor="orange"
              sx={{
                borderRadius: "10px",
                height: "80px",
                width: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                textAlign="center"
                sx={{
                  p: 2,
                  color: "#FFF",
                  fontSize: { xs: "25px", md: "40px" },
                  fontFamily: "Roboto_Slab",
                }}
              >
                Etsy
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 2,
                borderRadius: "30px",
                cursor: "pointer",
                bgcolor: "lightgray",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  p: 1.5,
                  fontSize: "17px",
                }}
              >
                Download the Etsy App
              </Typography>
            </Box>
          </Grid>
          <Grid item md={8} container sx={{ bgcolor: "#999", p: 4 }}>
            {/* shop */}
            <Grid md={3}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#FFF",
                  fontWeight: 700,
                }}
              >
                Shop
              </Typography>
              {shop.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    mt: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#FFF",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "#FFF",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                    href="#"
                  >
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>
            {/* sell */}
            <Grid md={3}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#FFF",
                  fontWeight: 700,
                }}
              >
                Sell
              </Typography>
              {sell.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    mt: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#FFF",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "#FFF",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                    href="#"
                  >
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>
            {/* about */}
            <Grid md={3}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#FFF",
                  fontWeight: 700,
                }}
              >
                About
              </Typography>
              {about.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    mt: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#FFF",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "#FFF",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                    href="#"
                  >
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>
            {/* help */}
            <Grid
              md={3}
              sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#FFF",
                  fontWeight: 700,
                }}
              >
                Help
              </Typography>
              {help.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    mt: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#FFF",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "#FFF",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                    href="#"
                  >
                    {item}
                  </Link>
                </Typography>
              ))}
              <Box sx={{ display: "flex", gap: 1, textAlign: "left" }}>
                <IconButton sx={{ color: "#FFF" }}>
                  <Instagram />
                </IconButton>

                <IconButton sx={{ color: "#FFF" }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: "#FFF" }}>
                  <Pinterest />
                </IconButton>
                <IconButton sx={{ color: "#FFF" }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: "#FFF" }}>
                  <YouTube />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* footer */}

      <Box
        sx={{
          py: 2,
          px: 6,
          bgcolor: "#C15BFF",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            p: 1,
            fontSize: "14.33px",
            color: "#FFF",
            "&:hover": {
              borderRadius: "30px",
              cursor: "pointer",
              bgcolor: "lightgray",
            },
          }}
        >
          <Typography>Ethiopia | English (US) | € (EUR)</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {footer.map((item, i) => (
            <Typography
              key={i}
              sx={{
                mt: 1,
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "#FFF",
                },
              }}
            >
              <Link
                style={{
                  color: "#FFF",
                  textDecoration: "underline",
                  fontSize: "14px",
                }}
                href="#"
              >
                {item}
              </Link>
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FooterSection;
