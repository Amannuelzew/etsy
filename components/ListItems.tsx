import { Grid } from "@mui/material";
import Item from "./Item";

const ListItems = () => {
  return (
    <Grid container spacing={0.5}>
      {[...Array.from({ length: 10 }, (_, i) => i)].map((star, index) => (
        <Grid item xs={6} md={2} key={index}>
          {index === 2 ? <Item image={true} /> : <Item image={false} />}
        </Grid>
      ))}
    </Grid>
  );
};
export default ListItems;
