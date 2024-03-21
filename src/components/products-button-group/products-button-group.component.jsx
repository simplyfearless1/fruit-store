import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import RemoveProductDialog from "../remove-product-dialog/remove-product-dialog.component";
import AddProductDialog from "../add-product-dialog/add-product-dialog.component";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsLoadedState } from "../../state/loaded-products.state";
import { productsState } from "../../state/products.state";

export default function ProductsButtonGroup () {
  const products = useRecoilValue(productsState);
  const [loadedProducts, setLoadedProducts] =
    useRecoilState(productsLoadedState);
  const [isProductRemoveDialogOpen, setIsProductRemoveDialogOpen] =
    useState(false);
  const [isProductAddDialogOpen, setIsProductAddDialogOpen] = useState(false);

  const openRemoveProductDialogHandler = () =>
    setIsProductRemoveDialogOpen(true);

  const removeProductDialogClosedHandler = () =>
    setIsProductRemoveDialogOpen(false);

  const openAddProductDialogHandler = () => setIsProductAddDialogOpen(true);

  const addProductDialogClosedHandler = () => setIsProductAddDialogOpen(false);

  const loadProductsHandler = () => setLoadedProducts([...products]);

  return (
    <>
      <Box sx={{ mt: 6 }}>
        <Typography variant="h1" sx={{ mb: 4 }}>
          Fruit Store
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ mb: 4.5 }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: 1.75 }}
            onClick={loadProductsHandler}
          >
            Load
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: 1.75 }}
            onClick={openAddProductDialogHandler}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: 1.75 }}
            onClick={openRemoveProductDialogHandler}
          >
            Delete
          </Button>
        </Box>
        <Divider component="hr" variant={"fullWidth"} sx={{ my: 2 }} />
      </Box>
      <RemoveProductDialog
        isOpen={isProductRemoveDialogOpen}
        handleClose={removeProductDialogClosedHandler}
      />
      <AddProductDialog
        isOpen={isProductAddDialogOpen}
        handleClose={addProductDialogClosedHandler}
      />
    </>
  );
};
