// React Import
import * as React from "react";

// MUI Imports
import {
  Box,
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// Outside file Imports
import Base from "../BaseService/BaseService";
import Hosting from "../HostingService/HostingService";
import Additional from "../AddCmdService/AddCmdService";
import Database from "../DatabaseService/DatabaseService";

// Icons Imports
import ApiIcon from "@mui/icons-material/Api";
import AddIcon from "@mui/icons-material/Add";
import StorageIcon from "@mui/icons-material/Storage";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

function Services() {
  let currentView = <></>;
  const [value, setValue] = React.useState("base");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  switch (value) {
    case "base":
      currentView = <Base />;
      break;
    case "additional":
      currentView = <Additional />;
      break;
    case "database":
      currentView = <Database />;
      break;
    case "hosting":
      currentView = <Hosting />;
      break;
    default:
      console.log("error");
      break;
  }

  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      {/* Start of Box */}
      <Grid container>
        {/* Start of Container */}
        <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
          <Typography variant="h3">Services Section</Typography>
        </Grid>
        {/* End of Grid Item #1 */}
        <Grid item xs={12}>
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction
              value="base"
              label="Base Services"
              icon={<PrecisionManufacturingIcon />}
            />
            <BottomNavigationAction
              icon={<AddIcon />}
              value="additional"
              label="Additional Command"
            />
            <BottomNavigationAction
              value="database"
              icon={<ApiIcon />}
              label="Database or API"
            />
            <BottomNavigationAction
              value="hosting"
              icon={<StorageIcon />}
              label="Year of hosting"
            />
          </BottomNavigation>
        </Grid>
        {/* End of Grid Item #3 */}
        <Grid item sx={12}>
          {currentView}
        </Grid>
        {/* End of Grid Item #2 */}
      </Grid>
    </Box>
  );
}

export default Services;
