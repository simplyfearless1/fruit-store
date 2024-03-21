import Box from "@mui/material/Box";

export default function ProductTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            backgroundColor: "#540474",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            py: 2,
            px: 4,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
