import { Box, Grid, Typography } from "@mui/material";

function NavBar() {
  return (
    <Box
      sx={{ p: 2 }}
      color="primary.light"
      backgroundColor="secondary.semiDark"
    >
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h5">Site Name</Typography>
        </Grid>

        <Grid item xs={5}></Grid>

        <Grid item xs={1}>
          <Typography>Link #1</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography>Link #2</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography> Link #3</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavBar;
