import { Box, Grid, Typography } from "@mui/material";
import PillButton from "./PillButton";

const DescriptionSection = () => {
  return (
    <Box sx={{ px: 6, py: 10, bgcolor: "#FFFBD8" }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 200,
            fontFamily: "Roboto_Slab",
            textAlign: "center",
          }}
        >
          What is Etsy?
        </Typography>
        <Typography
          sx={{
            textDecoration: "underline",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Read our wonderfully weird story
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item md={4}>
          <Typography sx={{ fontWight: "bold", fontSize: "1.8rem", mb: 2 }}>
            A community doing good
          </Typography>
          <Typography
            sx={{
              fontWeight: 200,
            }}
          >
            Etsy is a global online marketplace, where people come together to
            make, sell, buy, and collect unique items. We’re also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we’re making a positive impact,
            together.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography sx={{ fontWight: "bold", fontSize: "1.8rem", mb: 2 }}>
            Support independent creators
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
            }}
          >
            There’s no Etsy warehouse – just millions of people selling the
            things they love. We make the whole process easy, helping you
            connect directly with makers to find something extraordinary.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography sx={{ fontWight: "bold", fontSize: "1.8rem", mb: 2 }}>
            Peace of mind
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
            }}
          >
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          Have a question? Well, we’ve got some answers.
        </Typography>
        <PillButton label="Go to Help Center">{""}</PillButton>
      </Box>
    </Box>
  );
};

export default DescriptionSection;
