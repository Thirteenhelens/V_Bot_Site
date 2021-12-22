import "./App.css";
import * as React from "react";
import About from '../About/About.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Services from "../Services/Services.jsx";
import Questions from "../Questions/Questions.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#33ff77",
        main: "#2eb82e",
        dark: "#145214",
      },
      secondary: {
        light: "#ffe066",
        main: "#ffcc00",
        dark: "#000000",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <About />
        <Services />
        <Questions />
      </ThemeProvider>
    </div>
  );
}

export default App;
