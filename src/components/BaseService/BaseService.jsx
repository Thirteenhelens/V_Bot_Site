// MUI Import
import { Grid } from "@mui/material";
// Local Import
import BasicBotItem from "./BaseServiceItem";

function BaseService() {
  const cardText = [
    // {
    //   title: "Custom Bot - $50",
    //   text: "With this purchase, you get a basic bot with 3 commands. You get 3 commands customized by you.",
    // },
    {
      title: "Music Bot - $50",
      text: `This package is the essential music bot. With this package you
              will receive a bot that can play music through YouTube links.
              Comes with every necessary music bot command and api integrated
              commands to create a fully functional music bot.`,
    },
    {
      title: "Moderation Bot - $50",
      text: `This package is the essential moderation bot. With this package
              you will receive a bot that can moderate a discord server through
              commands that can only be used by specific members with the
              permissions. Comes with every necessary moderation command to
              create a fully functional moderation bot.`,
    },
  ];

  return (
    <Grid container >
      <Grid item xs={12} md={4} sx={{ p: 2, textAlign: "center" }}>
        {cardText.map((bot, i) => {
          return <BasicBotItem key={i} bot={bot} />;
        })}
      </Grid>
    </Grid>
  );
}

export default BaseService;
