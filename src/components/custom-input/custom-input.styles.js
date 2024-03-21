import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export const CustomInputField = styled(TextField)`
  & .MuiInputBase-root {
    padding: 0;
  }
`;

export const CustomFormControl = styled(FormControl)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  & .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputLabel-root {
    min-width: 82px;
  }
`;
