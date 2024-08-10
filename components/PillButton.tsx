import { Box, Typography } from "@mui/material";

const PillButton = ({
  label,
  width,
  children,
  ...props
}: {
  label: string;
  width: number;
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
        textAlign: "center",
        width: width,
      }}
    >
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
  );
};

export default PillButton;
