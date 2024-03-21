import InputLabel from "@mui/material/InputLabel";
import { CustomInputField, CustomFormControl } from "./custom-input.styles";

export default function CustomInput({
  label,
  placeholder,
  value,
  onChange,
  ...props
}) {
  return (
    <CustomFormControl variant="standard">
      <InputLabel htmlFor="custom-input" sx={{ position: "relative" }}>
        {label}
      </InputLabel>
      <CustomInputField
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        id="custom-input"
      />
    </CustomFormControl>
  );
}
