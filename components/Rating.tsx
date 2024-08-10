import StarIcon from "@mui/icons-material/Star";
import { Stack } from "@mui/material";

const Rating = ({ count }: { count: number }) => {
  return (
    <Stack direction={"row"}>
      {[...Array.from({ length: count }, (_, i) => i)].map((star, index) => (
        <StarIcon key={index} fontSize="small" />
      ))}
    </Stack>
  );
};

export default Rating;
