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
      <Box sx={{ bgcolor: "#CCEBFF", p: 2 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "15.33px",
            textAlign: "center",
            color: "#222222",
          }}
        >
          Yes! Send me exclusive offers, unique gift ideas, and personalized
          tips for shopping and selling on Etsy.
        </Typography>
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" variant="filled" component="div">
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "130px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0 20px 20px 0",

                      "&:hover": {
                        bgcolor: "black",
                        color: "#FFF",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                      Subscribe
                    </span>
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: "20px",
              bgcolor: "#FFF",
              border: "none",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)",
              width: { xs: "calc(100vw - 50px)", md: 480 },
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
      {/* dashed */}
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#3B67D9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", ms: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PublicIcon
            sx={{ color: "#FFF", textAlign: "center", alignItems: "center" }}
            fontSize="large"
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16.33px",
              textAlign: "center",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              textUnderlineOffset: "5px",
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
