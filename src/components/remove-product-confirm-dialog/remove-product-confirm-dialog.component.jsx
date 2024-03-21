import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import WarningIcon from "@mui/icons-material/Warning";
import Box from "@mui/material/Box";

export default function RemoveProductConfirmDialog({
  isOpen,
  handleClose,
  handleDelete,
}) {
  return (
    <>
      <Dialog
        open={isOpen}
        BackdropProps={{
          style: {
            boxShadow: "none",
            backgroundColor: "transparent",
          },
        }}
        PaperProps={{
          style: {
            padding: 0,
            backgroundColor: "#3C0054",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <WarningIcon sx={{ color: "#EB0909", mr: 1 }} />
            <Typography variant="body1">
              Are you sure you want to delete this fruit?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleClose}
              sx={{ marginRight: 1 }}
            >
              Cancel
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              onClick={handleDelete}
            >
              Ok
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
