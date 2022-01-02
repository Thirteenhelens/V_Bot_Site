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

function BaseService() {
  return (
    <Grid container>
      {/* Start of Grid Container */}
      <Grid item xs={4} sx={{ p: 2, textAlign: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
            alt="Discord Bot Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Basic Bot - $50
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With this purchase, you get a basic bot with 3 commands. You get 3
              commands customized by you.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up Form</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* End of Grid item #1 */}
      <Grid item xs={4} sx={{ p: 2, textAlign: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
            alt="Discord Bot Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Music Bot - $50
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With this purchase, you get a music bot with 3 commands. EX: play
              song, stop playing song...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up Form</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* End of Grid item #2 */}
      <Grid item xs={4} sx={{ p: 2, textAlign: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
            alt="Discord Bot Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Moderation Bot - $50
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With this purchase, you get a moderation bot with 3 commands. EX:
              ban user, promote user...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up Form</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* End of Grid item #3 */}
    </Grid>
  );
}

export default BaseService;
