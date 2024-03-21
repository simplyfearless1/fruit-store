import InputLabel from "@mui/material/InputLabel";
import { CustomFormControl } from "../custom-input/custom-input.styles";
import { CustomMenuItem, CustomSelectField } from "./custom-select.styles";
import CheckIcon from "@mui/icons-material/Check";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";

export default function CustomSelect({
  label,
  menuItems,
  value,
  onChange,
  helperText,
  ...props
}) {
  return (
    <CustomFormControl fullWidth>
      <InputLabel id="custom-select-label" sx={{ position: "relative" }}>
        {label}
      </InputLabel>
      <Box sx={{ width: "100%" }}>
        <CustomSelectField
          labelId="custom-select-label"
          id="custom-select"
          onChange={onChange}
          value={value}
          label={label}
          fullWidth
          {...props}
        >
          {menuItems.length > 0 &&
            menuItems.map((item) => {
              return (
                <CustomMenuItem value={item.val} key={item.id}>
                  {item.text}
                  {value === item.val && <CheckIcon sx={{ display: "none" }} />}
                </CustomMenuItem>
              );
            })}
        </CustomSelectField>
        {helperText && (
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {helperText}
          </FormHelperText>
        )}
      </Box>
    </CustomFormControl>
  );
}
