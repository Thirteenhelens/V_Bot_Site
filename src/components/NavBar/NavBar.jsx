// MUI Imports:
import { Box, Grid, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PaymentIcon from "@mui/icons-material/Payment";

function NavBar() {
  const githubClick = () => console.log("GitHub!");
  const paymentClick = () => console.log("Payment!");

  return (
    <Box
      sx={{ p: 2 }}
      color="primary.light"
      backgroundColor="secondary.semiDark"
    >
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={4} md={2}>
          <Typography variant="h5">Site Name</Typography>
        </Grid>

        <Grid item xs={3} md={8} />

        <Grid item xs={3} md={1}>
          <IconButton sx={{ color: "primary.light" }} onClick={paymentClick}>
            <PaymentIcon />
          </IconButton>
          <Typography>Interested?</Typography>
        </Grid>

        <Grid item xs={2} md={1}>
          <IconButton sx={{ color: "primary.light" }} onClick={githubClick}>
            <GitHubIcon />
          </IconButton>
          <Typography>Github</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavBar;
