import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const CustomSelectField = styled(Select)`
  legend {
    display: none;
  }
  & fieldset {
    top: 0;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  & {
    background-color: #6b048c;
    display: flex;
    justify-content: space-between;
    .MuiSvgIcon-root {
      display: none;
    }
  }
  &:hover {
    background-color: #5f037e;
  }
  &.Mui-selected {
    background-color: #7805a6;
    .MuiSvgIcon-root {
      display: block;
    }
    &:hover {
      background-color: #5f037e;
    }
  }
`;
