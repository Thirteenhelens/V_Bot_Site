// MUI Imports
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";
// React Router Import
import { useNavigate } from "react-router-dom";

function BasicBotItem({ bot }) {
  // Navigate is how to change URL
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "secondary.semiDark",
      }}
    >
      <CardMedia
        height="200"
        component="img"
        alt="Discord Bot Image"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fbeebom.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fdiscord-bots.jpg%3Ffit%3D750%252C500%26ssl%3D1&f=1&nofb=1"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "primary.main" }}
        >
          {bot.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "secondary.main" }}>
          {bot.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("/form")}>
          Sign Up Form
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicBotItem;
