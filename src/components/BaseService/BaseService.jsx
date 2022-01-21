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
      <Grid item xs={12} md={4} sx={{ p: 2, textAlign: "center" }}>
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
              Custom bot - $50
            </Typography>
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
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
      <Grid item xs={12} md={4} sx={{ p: 2, textAlign: "center" }}>
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
              Music Bot - $50
            </Typography>
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              This package is the essential music bot. With this package you
              will receive a bot that can play music through YouTube links.
              Comes with every necessary music bot command and api integrated
              commands to create a fully functional music bot.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Sign Up Form</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* End of Grid item #2 */}
      <Grid item xs={12} md={4} sx={{ p: 2, textAlign: "center" }}>
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
              Moderation Bot - $50
            </Typography>
            <Typography variant="body2" sx={{ color: "secondary.main" }}>
              This package is the essential moderation bot. With this package
              you will receive a bot that can moderate a discord server through
              commands that can only be used by specific members with the
              permissions. Comes with every necessary moderation command to
              create a fully functional moderation bot.
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
