import { CustomFormControl } from "../custom-input/custom-input.styles";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Typography from "@mui/material/Typography";
import {
  FilePreviewContainer,
  FilePreview,
  FilePreviewPlaceholderText,
} from "./custom-file-input.styles";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CustomFileInput({
  label,
  buttonText,
  accept,
  imgUrl,
  onChange,
  ...props
}) {
  return (
    <CustomFormControl fullWidth sx={{ flexWrap: "wrap" }}>
      <InputLabel sx={{ position: "relative" }}>{label}</InputLabel>
      <input
        accept={accept}
        style={{ display: "none" }}
        id="custom-input-file"
        type="file"
        onChange={onChange}
        {...props}
      />
      <label
        id="custom-file-label"
        htmlFor="custom-input-file"
        sx={{ position: "relative" }}
      >
        <Button color="primary" variant="contained" component="span">
          {buttonText}
        </Button>
      </label>
      <FilePreviewContainer>
        {(imgUrl && <FilePreview src={imgUrl} alt="icon" />) ||
          (imgUrl === "" && (
            <>
              <AddPhotoAlternateOutlinedIcon
                fontSize="large"
                sx={{ opacity: 0.7 }}
              />
              <FilePreviewPlaceholderText
                sx={{ fontWeight: 600, fontSize: ".75em", opacity: 0.7 }}
              >
                icon preview
              </FilePreviewPlaceholderText>
            </>
          ))}
      </FilePreviewContainer>
    </CustomFormControl>
  );
}
