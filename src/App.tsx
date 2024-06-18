import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import Auth from "./components/auth/Auth";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Auth />
      </Container>
    </ThemeProvider>
  );
};

export default App;
