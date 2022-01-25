import About from "../About/About.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Services from "../Services/Services.jsx";
import Questions from "../Questions/Questions.jsx";
import { Grid } from "@mui/material";

function ContentView() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} sx={{height:"800px"}}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <Services />
      </Grid>
      <Grid item xs={12}>
        <Questions />
      </Grid>
    </Grid>
  );
}

export default ContentView;
