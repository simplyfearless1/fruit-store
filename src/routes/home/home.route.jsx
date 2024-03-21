import ProductsButtonGroup from "../../components/products-button-group/products-button-group.component";
import ProductTabs from "../../components/product-tabs/product-tabs.component";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import productData from "../../mock_data_load.json";
import { useRecoilState } from "recoil";
import { productsState } from "../../state/products.state";

export default function Home() {
  const [productState, setProductState] = useRecoilState(productsState);

  useEffect(() => {
    setProductState([...productData]);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <ProductsButtonGroup />
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Frult list
          </Typography>
          <ProductTabs />
        </Box>
      </Container>
    </>
  );
}
