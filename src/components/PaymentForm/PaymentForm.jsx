// import { isMobile } from "react-device-detect";
import { Box, Grid, Typography } from "@mui/material";

function PaymentForm() {
  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      <Grid container>
        <Grid item item xs={12} sx={{ p: 1, textAlign: "center" }}>
          <Typography variant="h3">Payment Form</Typography>
        </Grid>
        <Grid item xs={12} sx={{ p: 1 }}>
          <iframe
            title="wow"
            width="640"
            height="661"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            src="https://docs.google.com/forms/d/e/1FAIpQLSc7UpUE47WDYvmSdeW3yfuzt0kRHxMdIVOdgm6ClN_v_6t5Rw/viewform?embedded=true"
          >
            Loading…
          </iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentForm;
