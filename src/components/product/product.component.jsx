import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useProgressiveImg from "../../hooks/progressive-img-load.hook";

export default function Product(props) {
  const { title, description, price, thumbnail } = props;
  const imgLoaded = useProgressiveImg(thumbnail);
  const placeholder = "https://placehold.co/300x300";

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      <Box
        sx={{
          mr: 3,
          minWidth: 128,
          height: 128,
          borderRadius: "8px",
          backgroundImage: `url(${thumbnail || placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
          {description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#209B25", fontWeight: 700, fontSize: 18 }}
        >
          $ {price}
        </Typography>
      </Box>
    </Box>
  );
}
