import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRecoilState } from "recoil";
import { productsState } from "../../state/products.state";
import { useState } from "react";
import RemoveProductConfirmDialog from "../remove-product-confirm-dialog/remove-product-confirm-dialog.component";

export default function RemoveProductDialog({ isOpen, onClose, handleClose }) {
  const [products, setProducts] = useRecoilState(productsState);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState("");

  const confirmDialogHandler = (e) => {
    setProductIdToDelete(e.target.id);
    setIsConfirmationDialogOpen(true);
  };

  const closeConfirmationDialogHandler = () =>
    setIsConfirmationDialogOpen(false);

  const deleteProductHandler = () => {
    const temp = [...products];
    const filteredProducts = temp.filter(
      (product) => product.id != productIdToDelete,
    );
    setProducts([...filteredProducts]);
    setIsConfirmationDialogOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "#FFFFFF",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Delete fruit
          </Typography>
          <TableContainer sx={{ borderRadius: "8px" }}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Tab</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Fruit</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products &&
                  products.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.tab}</TableCell>
                      <TableCell align="center">{row.country}</TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="text"
                          size="small"
                          disableRipple
                          color="secondary"
                          id={row.id}
                          onClick={confirmDialogHandler}
                          sx={{ fontSize: 14, fontWeight: 400, padding: 0 }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
      <RemoveProductConfirmDialog
        isOpen={isConfirmationDialogOpen}
        handleDelete={deleteProductHandler}
        handleClose={closeConfirmationDialogHandler}
      />
    </>
  );
}
