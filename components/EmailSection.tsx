import {
  Box,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";

const EmailSection = () => {
  return (
    <Box sx={{ bgcolor: "#CCEBFF", p: 7 }}>
      <Typography
        sx={{
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Yes! Send me exclusive offers, unique gift ideas, and personalized tips
        for shopping and selling on Etsy.
      </Typography>
      <Box
        sx={{
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            borderRadius: "20px",
            bgcolor: "#FFF",
            border: "none",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
            width: 400,
            borderColor: "transparent",
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default EmailSection;
