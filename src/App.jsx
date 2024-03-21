import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import { theme } from "./config/theme.config";
import Home from "./routes/home/home.route";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {(!isLoading && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ThemeProvider>
      )) || (
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Container>
      )}
    </>
  );
}
