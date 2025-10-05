import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Home from "./pages/Home";
import CompanyDetails from "./pages/CompanyDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#00bcd4" },
      secondary: { main: "#ff4081" },
      background: {
        default: darkMode ? "#121212" : "#f4f6fb",
        paper: darkMode ? "#1e1e1e" : "#fff",
      },
    },
    typography: {
      h3: {
        fontWeight: 700,
        background: "linear-gradient(90deg, #00bcd4, #ff4081)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
            <Typography variant="h3" gutterBottom>
              Companies Directory
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/company/:id" component={CompanyDetails} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
