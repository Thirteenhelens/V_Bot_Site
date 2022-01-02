import * as React from "react";
import {
  Box,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

function Services() {
  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={12} sx={{ color: "primary.light" }}>
          <BottomNavigation>
            <BottomNavigationAction label="Poggers" />
            <BottomNavigationAction label="Poggers" />
            <BottomNavigationAction label="Poggers" />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
