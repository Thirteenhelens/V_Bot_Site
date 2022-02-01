// React Router Import
import { useNavigate } from "react-router-dom";
// MUI Imports
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid, Typography } from "@mui/material";

function PaymentForm() {
  // Navigate changes the URL
  const navigate = useNavigate();

  return (
    <Grid container sx={{ height: 2 / 2 }}>
      <Box
        color="primary.light"
        backgroundColor="secondary.dark"
        sx={{ width: 2 / 2, height: "100vh" }}
      >
        <Grid item xs={12} sx={{ textAlign: "center", m: 2 }}>
          <Box
            borderRadius={10}
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="h3" sx={{ color: "secondary.dark" }}>
              Payment Form
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left" }}>
          <div role="form">
            <iframe
              width="100%"
              height="750"
              frameBorder="0"
              title="PaymentForm"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc7UpUE47WDYvmSdeW3yfuzt0kRHxMdIVOdgm6ClN_v_6t5Rw/viewform?embedded=true"
            >
              Loading…
            </iframe>
          </div>
        </Grid>
        <Grid item md={12} sx={{ textAlign: "center" }}>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default PaymentForm;
