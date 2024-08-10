"use client";
import { Box, Stack, Typography } from "@mui/material";

const PillButton = ({
  label,
  children,
  ...props
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        ...props,
        p: 1,
        border: 2,
        gap: 1,
        borderRadius: "20px",
        display: "inline-block",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {children}
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "13.99px",
            color: "#222",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default PillButton;
