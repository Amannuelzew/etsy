import { Box, Grid } from "@mui/material";
import Item from "./Item";

const ListItems = () => {
  return (
    <Grid container spacing={0.5}>
      {[...Array.from({ length: 10 }, (_, i) => i)].map((star, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <Item />
        </Grid>
      ))}
    </Grid>
  );
};
export default ListItems;
