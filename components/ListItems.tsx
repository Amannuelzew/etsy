import { Grid } from "@mui/material";
import Item from "./Item";
import { DUMMY_DATA } from "@/utils/constants";

const ListItems = () => {
  return (
    <Grid container spacing={0.5}>
      {DUMMY_DATA.map((data, index) => (
        <Grid item xs={6} md={2} key={index}>
          <Item item={data} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ListItems;
