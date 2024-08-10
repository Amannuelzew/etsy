import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const lists = [
  { name: "Homepage", path: "/" },
  { name: "Jewelry", path: "/" },
  { name: "Necklaces", path: "/" },
  { name: "Beaded Necklaces", path: "/" },
];
const Breadcrumb = () => {
  return (
    <Box
      aria-label="breadcrumb"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1,
      }}
    >
      {lists.map((list, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          <Link href={list.path} style={{ color: "#000" }}>
            <Typography> {list.name}</Typography>
          </Link>
          <NavigateNextIcon fontSize="small" />
        </Box>
      ))}
    </Box>
  );
};

export default Breadcrumb;
