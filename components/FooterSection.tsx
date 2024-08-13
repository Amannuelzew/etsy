import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import {
  ExpandLess,
  ExpandMore,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { useState } from "react";
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
  const [shopopen, setShopOpen] = useState(false);
  const [sellopen, setSellOpen] = useState(false);
  const [aboutopen, setAboutOpen] = useState(false);
  const [helpopen, setHelpOpen] = useState(true);

  const handleShopClick = () => {
    setShopOpen(!shopopen);
  };
  const handleSellClick = () => {
    setSellOpen(!sellopen);
  };
  const handleAboutClick = () => {
    setAboutOpen(!aboutopen);
  };
  const handleHelpClick = () => {
    setHelpOpen(!helpopen);
  };
  return (
    <>
      {/* mobile view */}
      <Box sx={{ bgcolor: "#2638C0", display: { xs: "block", md: "none" } }}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            color: "#FFF",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {/* shop */}
          <ListItemButton onClick={handleShopClick}>
            <ListItemText primary="Shop" />
            {shopopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={shopopen} timeout="auto" unmountOnExit>
            {shop.map((item, i) => (
              <List key={i} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            ))}
          </Collapse>
          {/* sell */}
          <ListItemButton onClick={handleSellClick}>
            <ListItemText primary="Sell" />
            {sellopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={sellopen} timeout="auto" unmountOnExit>
            {sell.map((item, i) => (
              <List key={i} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            ))}
          </Collapse>
          {/* about */}
          <ListItemButton onClick={handleAboutClick}>
            <ListItemText primary="About" />
            {aboutopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={aboutopen} timeout="auto" unmountOnExit>
            {about.map((item, i) => (
              <List key={i} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            ))}
          </Collapse>
          {/* help */}
          <ListItemButton onClick={handleHelpClick}>
            <ListItemText primary="Help" />
            {helpopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={helpopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Help Center" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Privacy settings" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* social */}
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
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
        {/* logo download */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#122868",
            p: 3,
          }}
        >
          <Box
            bgcolor="#F1641E"
            sx={{
              borderRadius: "10px",
              height: "60px",
              width: "60px",
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
                fontSize: { xs: "20px", md: "40px" },
                fontFamily: "Roboto_Slab",
              }}
            >
              Etsy
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "60px",
              cursor: "pointer",
              bgcolor: "#2638C0",
              color: "#FFF",
            }}
          >
            <Typography
              sx={{
                p: 1,
                fontSize: "13px",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              Download the Etsy App
            </Typography>
          </Box>
        </Box>
        {/*footer*/}
        <Box
          sx={{
            py: 3,
            bgcolor: "#222222",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <Typography
            sx={{
              p: 1,
              fontSize: "14.33px",
            }}
          >
            Ethiopia | English (US) | € (EUR)
          </Typography>
          <Typography
            sx={{
              p: 1,
              fontSize: "12.33px",
            }}
          >
            © 2024 Etsy, Inc.
          </Typography>

          <Box sx={{ display: "inline-block", px: 0.5 }}>
            {footer.slice(1).map((item, i) => (
              <span
                key={i}
                style={{
                  marginRight: "5px",
                  marginLeft: "5px",
                  color: "#FFF",
                  textDecoration: "underline",
                  textWrap: "wrap",
                  fontSize: "11px",
                }}
              >
                {item}
              </span>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#CCEBFF", display: { xs: "none", md: "block" } }}>
        <Grid container>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#122868",
              p: 10,
            }}
          >
            <Box
              bgcolor="#F1641E"
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
                bgcolor: "#2638C0",
                color: "#FFF",
                width: "80%",
              }}
            >
              <Typography
                sx={{
                  p: 2,
                  fontSize: "16px",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                Download the Etsy App
              </Typography>
            </Box>
          </Grid>
          <Grid item md={8} container sx={{ bgcolor: "#2638C0", p: 4 }}>
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
              sx={{ alignItems: "flex-start", justifyContent: "flex-start" }} // Added
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
          display: { xs: "none", md: "flex" },
          py: 3,
          px: 6,
          bgcolor: "#222222",
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
