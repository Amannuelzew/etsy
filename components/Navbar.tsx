"use client";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  return (
    <Paper
      sx={{
        display: "inline-block",
        width: "100%",
        py: 1,
        px: { xs: 1, md: 8 },
      }}
    >
      {/* top navbar */}
      <Box
        sx={{ display: "flex", gap: { xs: 0, md: 3 }, alignItems: "center" }}
      >
        <Box
          sx={{ display: "flex", gap: { xs: 0, md: 2 }, alignItems: "center" }}
        >
          <MenuIcon sx={{ mr: 1, display: { xs: "block", md: "none" } }} />
          <Typography
            sx={{
              color: "#f1641e",
              mr: 1,
              fontWeight: { xs: 10, md: 500 },
              fontSize: { xs: "25px", md: "50px" },
              fontFamily: "Roboto_Slab",
            }}
          >
            Etsy
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              p: 1,
              color: "#222",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#0e0e0e17",
                borderRadius: "20px",
                cursor: "pointer",
              },
            }}
          >
            <MenuIcon sx={{ display: { xs: "none", md: "block" } }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "12.99px",
                color: "#222",
                display: { xs: "none", md: "block" },
              }}
            >
              categories
            </Typography>
          </Box>
          <Searchbar />
          <Typography
            sx={{
              p: 1,
              display: { xs: "none", md: "block" },
              "&:hover": {
                backgroundColor: "#0e0e0e17",
                borderRadius: "20px",
                cursor: "pointer",
              },
            }}
          >
            signin
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 0, md: 2 },
              alignItems: "center",
            }}
          >
            <IconButton sx={{ display: { xs: "relative", md: "none" } }}>
              <PersonIcon />
            </IconButton>
            <IconButton sx={{ display: { xs: "none", md: "block" } }}>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <CardGiftcardOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* below searchbar */}
      <Box
        sx={{
          mt: 0.5,
          pl: 35,
          gap: 3,
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            color: "#222",
            p: 1,
            "&:hover": {
              backgroundColor: "#0e0e0e17",
              borderRadius: "20px",
              cursor: "pointer",
            },
          }}
        >
          <CardGiftcardOutlinedIcon />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "12.99px",
            }}
          >
            Gift Mode
          </Typography>
        </Box>
        <Typography
          sx={{
            p: 1,
            fontWeight: "700",
            fontSize: "12.99px",
            "&:hover": {
              backgroundColor: "#0e0e0e17",
              borderRadius: "20px",
              cursor: "pointer",
            },
          }}
        >
          Back-to-School Savings
        </Typography>
        <Typography
          sx={{
            p: 1,
            fontWeight: "700",
            fontSize: "12.99px",
            "&:hover": {
              backgroundColor: "#0e0e0e17",
              borderRadius: "20px",
              cursor: "pointer",
            },
          }}
        >
          Home Favorites
        </Typography>
        <Typography
          sx={{
            p: 1,
            fontWeight: "700",
            fontSize: "12.99px",
            "&:hover": {
              backgroundColor: "#0e0e0e17",
              borderRadius: "20px",
              cursor: "pointer",
            },
          }}
        >
          Fashion Finds
        </Typography>
        <Typography
          sx={{
            p: 1,
            fontWeight: "700",
            fontSize: "12.99px",
            color: "#222",
            "&:hover": {
              backgroundColor: "#0e0e0e17",
              borderRadius: "20px",
              cursor: "pointer",
            },
          }}
        >
          Registry
        </Typography>
      </Box>
    </Paper>
  );
};

export default Navbar;

const Searchbar = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: 200, md: 800 },
        border: 2,
        borderRadius: "40px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search"
        inputProps={{ "aria-label": "search" }}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton sx={{ display: { xs: "none", md: "block" } }}>
          <CloseIcon />
        </IconButton>
        <IconButton
          type="button"
          sx={{ p: "4px", m: 0.5, backgroundColor: "#f1641e", color: "#FFF" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
