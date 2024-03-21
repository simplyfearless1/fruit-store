import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Product from "../product/product.component";

export default function ProductList(props) {
  const { country, products } = props;
  const countryFlag = {
    America: "us",
    Japan: "jp",
    England: "gb",
  };

  return (
    <>
      {products.length > 0 && (
        <Box sx={{ my: 4 }}>
          <Box>
            <Typography variant="subtitle-2" sx={{ display: "flex" }}>
              <span
                className={`fi fi-${countryFlag[country]}`}
                style={{ marginRight: 8 + "px" }}
              />
              {country}
            </Typography>
            <Divider
              component="hr"
              variant={"fullWidth"}
              sx={{ mt: 1, mb: 4 }}
            />
          </Box>
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            );
          })}
        </Box>
      )}
    </>
  );
}
