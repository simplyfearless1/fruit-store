import { createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      fontWeight: 600,
      textTransform: "initial",
    },
    h1: {
      fontWeight: 600,
      fontSize: 56,
    },
    h2: {
      fontWeight: 600,
      fontSize: 42,
    },
    h3: {
      fontWeight: 600,
      fontSize: 32,
    },
    h4: {
      fontWeight: 600,
      fontSize: 24,
    },
    h5: {
      fontWeight: 600,
      fontSize: 18,
    },
    h6: {
      fontWeight: 600,
      fontSize: 16,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#6B048C",
          boxShadow: "0px 2px 4px 0px #00000024",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreIcon,
      },
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            color: "#FFFFFF",
          },
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#6B048C",
            },
            "&:hover fieldset": {
              borderColor: "#AF08F2",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#AF08F2",
            },
          },
          "& .MuiInputBase-input": {
            fontWeight: 600,
            border: "1px solid #6B048C",
            backgroundColor: "#6B048C",
            boxShadow: "none",
            fontSize: ".875em",
            padding: "10.5px 12px",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          transform: "initial!important",
          fontSize: ".875rem",
          marginRight: "16px",
          opacity: 0.7,
          color: "#FFFFFF!important",
          position: "relative",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            borderRadius: 8,
            padding: "12px",
            border: "1px solid #6B048C",
            backgroundColor: "#6B048C",
            boxShadow: "none",
            fontSize: ".875em",
            color: "rgba(255,255,255, .56)",
          },
          "& label": {
            color: "#3E68A8",
          },
          "& label.Mui-focused": {
            color: "#3E68A8",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#3E68A8",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#6B048C",
              boxShadow: "none",
            },
            "&:hover fieldset": {
              borderColor: "#AF08F2",
              boxShadow: "none",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#AF08F2",
              boxShadow: "none",
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            border: "none",
            padding: "8px 20px",
          },
          "& .MuiTableHead-root .MuiTableCell-root": {
            fontWeight: 600,
            opacity: 0.7,
          },
          "& .MuiTableHead-root .MuiTableRow-root": {
            backgroundColor: "#540474",
          },
          "& .MuiTableBody-root .MuiTableRow-root": {
            backgroundColor: "#5F037E",
          },
          "& .MuiTableBody-root .MuiTableRow-root:nth-of-type(2n)": {
            backgroundColor: "#6B048C",
          },
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        BackdropProps: {
          style: {
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
            backgroundColor: "rgba(44, 1, 62, 0.9)",
          },
        },
        PaperProps: {
          style: {
            padding: 12,
            backgroundColor: "#4A0267",
            boxShadow: "none",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#8A06BF",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#4E036C",
          opacity: 0.6,
          "&.MuiTab-root:first-of-type": {
            borderTopLeftRadius: 8,
          },
          "&.MuiTab-root:last-of-type": {
            borderTopRightRadius: 8,
          },
          "&.Mui-selected": {
            backgroundColor: "#540474",
            color: "#FFFFFF",
            opacity: 1,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 22px",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  palette: {
    background: {
      default: "#3C0154",
    },
    primary: {
      light: "#5F037E",
      main: "#6B048C",
      dark: "#540474",
    },
    secondary: {
      light: "#FF9C9B",
      main: "#FF7170",
      dark: "#FE5250",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      disabled: "#FFFFFF",
    },
  },
});
