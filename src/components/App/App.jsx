// Importing React, all Local files, and Theme creation tools
import * as React from "react";
import About from "../About/About.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Services from "../Services/Services.jsx";
import Questions from "../Questions/Questions.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <ThemeProvider theme={theme}>
          <NavBar />
          <About />
          <Services />
          <Questions />
      </ThemeProvider>
  );
}

export default App;
