import "./App.css";
import * as React from "react";
import About from "../About/About.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Services from "../Services/Services.jsx";
import Questions from "../Questions/Questions.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// NEEDED????
import { Grid } from "@mui/material";

function App() {
  // Theme is what dictates the colors the site uses
  const theme = createTheme({
    palette: {
      primary: {
        light: "#33ff77",
        main: "#2eb82e",
        dark: "#145214",
      },
      selected: {
        color: "#ffe066",
      },
      secondary: {
        light: "#ffe066",
        main: "#ffcc00",
        semiDark: "#262626",
        dark: "#000000",
      },
    },
  });

  return (
    <Grid container>
      <ThemeProvider theme={theme}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>

        <Grid item xs={12}>
          <About />
        </Grid>

        <Grid item xs={12}>
          <Services />
        </Grid>

        <Grid item xs={12}>
          <Questions />
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}

export default App;
