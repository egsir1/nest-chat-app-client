import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import Auth from "./components/auth/Auth";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";

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
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
