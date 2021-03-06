// MUI Import
import { Grid, Typography } from "@mui/material";
// Local Import
import CustomBotItem from "./CustomBotItem";

function AddCmdService() {
  const cardText = [
    {
      title: "Custom Bot - $50",
      text: `With this purchase, you get a basic bot with 3 commands. You get 3 commands customized by you.`,
    },
    {
      title: "Additional Command - $10",
      text: `With this purchase, you get another command for your bot. If you
              already have a bot, it's $10. If you are buying a bot, this will
              add $10 to your purchase.`,
    },
    {
      title: "Database connection or API command - $15",
      text: `This package is the essential moderation bot. With this package
              you will just get rolled, loser.`,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: "left", pl: 2 }}>
        <Typography variant="h4">
          Custom Bot Service{cardText.length <= 1 ? "" : "s"}:
        </Typography>
      </Grid>
      {cardText.map((bot, i) => {
        return (
          <Grid item xs={12} md={4} key={i} sx={{ p: 2, textAlign: "center" }}>
            <CustomBotItem bot={bot} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default AddCmdService;
