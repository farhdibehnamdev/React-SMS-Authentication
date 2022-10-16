import { createTheme } from "@mui/material";
import "./Font.theme.css";
const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFamily: "IRANSans",
      textTransform: "none",
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontSize: 14,
    },
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    background: {
      default: "#F5F8FA",
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#ECF1FB",
          borderRadius: "8px",
          border: "1px solid #CECECE",
          font: "normal 600 14px/22px",
          color: "#33475B",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #fff",
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
