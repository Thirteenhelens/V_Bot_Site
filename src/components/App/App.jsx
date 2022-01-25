// React Imports
import * as React from "react";
import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Theme Imports for Styling
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Local File Imports
import FormView from "../FormView/FormView.jsx";
import ContentView from "../ContentView/ContentView.jsx";

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
      <BrowserRouter>
        <Routes>
          {/* ContentView is the main content of the site. */}
          <Route path="/" element={<ContentView />} />
          {/* FormView just displays the Google Form */}
          <Route path="/form" element={<FormView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
