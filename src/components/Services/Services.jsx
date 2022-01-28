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

// Outside file Imports
import Base from "../BaseService/BaseService";
import Additional from "../CustomBot/CustomBot";
import Hosting from "../HostingService/HostingService";

// Icons Imports
import StorageIcon from "@mui/icons-material/Storage";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

function Services() {
  let currentView;

  const [value, setValue] = React.useState("base");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  switch (value) {
    case "base":
      currentView = <Base />;
      break;
    case "custom":
      currentView = <Additional />;
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
          <Box
            borderRadius={10}
            sx={{
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "secondary.semiDark",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant="h3" sx={{ color: "secondary.dark" }}>
              Services
            </Typography>
          </Box>
        </Grid>
        {/* End of Grid Item #1 */}
        <Grid item xs={12}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={handleChange}
            sx={{
              backgroundColor: "secondary.dark",
              "& .MuiBottomNavigationAction-root": {
                color: "selected.color",
              },
              "& .Mui-selected, .Mui-selected > svg": {
                color: "primary.light",
              },
            }}
          >
            <BottomNavigationAction
              value="base"
              label="Base Services"
              icon={<PrecisionManufacturingIcon />}
            />
            <BottomNavigationAction
              value="custom"
              label="Custom Bot"
              icon={<AutoAwesomeIcon />}
            />
            <BottomNavigationAction
              value="hosting"
              icon={<StorageIcon />}
              label="Year of hosting"
            />
          </BottomNavigation>
        </Grid>
        {/* End of Grid Item #3 */}
        <Grid item xs={12}>
          {currentView}
        </Grid>
        {/* End of Grid Item #2 */}
      </Grid>
    </Box>
  );
}

export default Services;
