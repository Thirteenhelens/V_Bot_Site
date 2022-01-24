// MUI Imports
import {
  Card,
  Grid,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";

function HostingService() {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
        <Card sx={{ maxWidth: 345, backgroundColor: "secondary.semiDark" }}>
          <CardMedia
            component="img"
            height="200"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
            alt="Discord Bot Image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "primary.main" }}
            >
              Hosting Service - $12.25
            </Typography>
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              You will get bot hosted with this, for 12 months. Recurring
              payments can be setup or removed by request.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up Form</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HostingService;
