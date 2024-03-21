import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CustomInput from "../custom-input/custom-input.component";
import CustomSelect from "../custom-select/custom-select.component";
import CustomFileInput from "../custom-file-input/custom-file-input.component";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../../state/products.state";

export default function AddProductDialog({
  isOpen,
  onClose,
  handleClose,
  onSubmit,
}) {
  const [products, setProducts] = useRecoilState(productsState);
  const tabSelectItems = [
    {
      id: 0,
      val: "Hot",
      text: "Hot",
    },
    {
      id: 1,
      val: "Recommended",
      text: "Recommended",
    },
    {
      id: 2,
      val: "New",
      text: "New",
    },
  ];
  const countrySelectItems = [
    {
      id: 0,
      val: "America",
      text: "America",
    },
    {
      id: 1,
      val: "Japan",
      text: "Japan",
    },
    {
      id: 2,
      val: "England",
      text: "England",
    },
  ];
  const formDefaultData = {
    title: "",
    description: "",
    price: "",
    thumbnail: "",
    uploaded_thumbnail: "",
    tab: "",
    country: "",
  };
  const formDefaultError = {
    title: false,
    description: false,
    price: false,
    thumbnail: false,
    uploaded_thumbnail: false,
    tab: false,
    country: false,
  };
  const [formData, setFormData] = useState(formDefaultData);
  const [formErrors, setFormErrors] = useState(formDefaultError);
  const {
    title,
    description,
    uploaded_thumbnail,
    thumbnail,
    price,
    tab,
    country,
  } = formData;
  const errorText = "This field is required.";

  const imageUploadHandler = (e) => {
    const image = e.target.files[0];
    setFormData({
      ...formData,
      ["uploaded_thumbnail"]: URL.createObjectURL(image),
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setFormData({ ...formDefaultData });
    setFormErrors({ ...formDefaultError });
    handleClose();
  };

  const handleSubmit = () => {
    if (title && description && price && tab && country && thumbnail) {
      const newProduct = {
        id: products.length + 1,
        title: title,
        country: country,
        tab: tab,
        description: description,
        price: price,
        thumbnail: uploaded_thumbnail !== "" ? uploaded_thumbnail : thumbnail,
      };
      setProducts([...products, newProduct]);
      setFormData({ ...formDefaultData });
      setFormErrors({ ...formDefaultError });
      handleClose();
    } else {
      validateFormInput(formData);
    }
  };

  function validateFormInput(formData) {
    const data = { ...formData };
    let errors = formDefaultError;

    Object.keys(data).forEach((key) => {
      if (
        data[key] === "" &&
        key !== "uploaded_thumbnail" &&
        key !== "thumbnail"
      ) {
        errors[key] = true;
      }
    });
    setFormErrors({
      ...errors,
    });
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
          style: {
            padding: 12,
            backgroundColor: "#4A0267",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Add fruit
          </Typography>
          <Box>
            <CustomSelect
              menuItems={tabSelectItems}
              value={tab}
              label="Tab"
              onChange={inputChangeHandler}
              name="tab"
              error={formErrors.country}
              helperText={formErrors.country ? errorText : ""}
            />
            <CustomSelect
              menuItems={countrySelectItems}
              value={country}
              label="Country"
              onChange={inputChangeHandler}
              required
              name="country"
              error={formErrors.tab}
              helperText={formErrors.tab ? errorText : ""}
            />
            <CustomInput
              label="Title"
              placeholder="Apple"
              required
              onChange={inputChangeHandler}
              name="title"
              value={title}
              error={formErrors.title}
              helperText={formErrors.title ? errorText : ""}
            />
            <CustomInput
              label="Price"
              placeholder="3"
              required
              onChange={inputChangeHandler}
              name="price"
              value={price}
              error={formErrors.price}
              helperText={formErrors.price ? errorText : ""}
            />
            <CustomFileInput
              imgUrl={uploaded_thumbnail}
              accept="image/*"
              label="Icon"
              buttonText="Upload"
              onChange={imageUploadHandler}
              name="uploaded-thumbnail"
            />
            <CustomInput
              label="Icon URL"
              placeholder="if you don’t have local picture, please input icon URL."
              name="thumbnail"
              value={thumbnail}
              onChange={inputChangeHandler}
            />
            <CustomInput
              onChange={inputChangeHandler}
              name="description"
              label="Description"
              placeholder="Lorem ipsum"
              required
              multiline
              value={description}
              rows={2}
              error={formErrors.description}
              helperText={formErrors.description ? errorText : ""}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            component="span"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component="span"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
