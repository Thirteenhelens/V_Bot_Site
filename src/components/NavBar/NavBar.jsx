import { Box, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PaymentIcon from "@mui/icons-material/Payment";

function NavBar() {
  return (
    <Box
      sx={{ p: 2 }}
      color="primary.light"
      backgroundColor="secondary.semiDark"
    >
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={4}>
          <Typography variant="h5">Site Name</Typography>
        </Grid>

        <Grid item xs={5} />

        {/* <Grid item xs={1}>
          <Typography>Link #1</Typography>
        </Grid> */}

        <Grid item xs={1}>
          <PaymentIcon />
          <Typography>Buy Service</Typography>
        </Grid>

        <Grid item xs={1}>
          <GitHubIcon />
          <Typography>Github</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavBar;
