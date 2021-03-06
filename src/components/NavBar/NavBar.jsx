// React Router Import
import { useNavigate } from "react-router-dom";
// MUI Imports
import { Box, Grid, Typography, IconButton } from "@mui/material";
// MUI Icons Imports
import GitHubIcon from "@mui/icons-material/GitHub";
import PaymentIcon from "@mui/icons-material/Payment";

function NavBar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ p: 2 }}
      role="navigation"
      color="primary.light"
      backgroundColor="secondary.semiDark"
    >
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={4} md={2}>
          <Typography variant="h4">Site Name</Typography>
        </Grid>

        <Grid item xs={3} md={8} />
        <Grid item xs={3} md={1} onClick={() => navigate("/form")}>
          <IconButton
            alt="link to payment form"
            sx={{ color: "primary.light" }}
          >
            <PaymentIcon />
          </IconButton>
          <Typography>Interested?</Typography>
        </Grid>

        <Grid item xs={2} md={1}>
          <IconButton
            alt="link to creator's github"
            sx={{ color: "primary.light" }}
            onClick={() => {
              window.open("https://github.com/v0ncent");
            }}
          >
            <GitHubIcon />
          </IconButton>
          <Typography>Github</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavBar;
