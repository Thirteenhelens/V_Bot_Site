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

function AddCmdService() {
  return (
    <Grid container>
      {/* <Grid item sx={3} /> */}
      <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
            alt="Discord Bot Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Additional Command - $10
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With this purchase, you get another command for your bot. If you already have a bot, it's $10. If you are buying a bot, this will add $10 to your purchase.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up Form</Button>
          </CardActions>
        </Card>
      </Grid>
      {/*  <Grid item sx={3} /> */}
    </Grid>
  );
}

export default AddCmdService;
