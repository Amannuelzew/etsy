import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, ListItem, ListItemText, Typography } from "@mui/material";
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
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {lists.map((list, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          {index === 0 ? (
            <ListItem>
              <ListItemText>
                <Link href={list.path} style={{ color: "#000" }}>
                  <Typography> {list.name}</Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ) : (
            <Typography> {list.name}</Typography>
          )}

          <NavigateNextIcon fontSize="small" />
        </Box>
      ))}
    </Box>
  );
};

export default Breadcrumb;
