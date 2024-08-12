import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

const EmailSection = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#CCEBFF", p: 7 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "14.33px",
            textAlign: "center",
          }}
        >
          Yes! Send me exclusive offers, unique gift ideas, and personalized
          tips for shopping and selling on Etsy.
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
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    sx={{
                      width: "100px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "0 20px 20px 0",
                      justifyContent: "center",
                      bgcolor: "red",
                      "&:hover": {
                        bgcolor: "black",
                        color: "#FFF",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <span>Subscribe</span>
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: "20px",
              bgcolor: "#FFF",
              border: "none",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
              width: 400,
              borderColor: "transparent",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
              "&:hover fieldset": {
                borderColor: "transparent",
                border: "none",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
                border: "none",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#C15BFF",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <PublicIcon sx={{ color: "#FFF" }} fontSize="large" />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14.33px",
              textAlign: "center",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              color: "#FFF",
            }}
          >
            Etsy is powered by 100% renewable electricity.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default EmailSection;
