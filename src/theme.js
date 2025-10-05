import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode
    primary: {
      main: "#00bcd4", // cyan gradient base
    },
    secondary: {
      main: "#ff4081", // pink gradient base
    },
    background: {
      default: "#121212", // dark background
      paper: "#1e1e1e",   // card background
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 700,
      background: "linear-gradient(90deg, #00bcd4, #ff4081)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          background:
            "linear-gradient(145deg, rgba(0,188,212,0.1), rgba(255,64,129,0.1))",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: "8px 20px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
