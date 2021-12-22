import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  // CardMedia,
} from "@mui/material";

function About() {
  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      {/*  */}
      <Grid container>
        {/*  */}
        <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
          <Typography variant="h3">About section</Typography>
        </Grid>
        {/*  */}
        <Grid item xs={12}>
          <br />
        </Grid>
        {/*  */}
        <Grid item xs={5}>
          <Card
            variant="outlined"
            sx={{
              color: "primary.light",
              backgroundColor: "secondary.dark",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What is this site?
              </Typography>
              <Typography variant="body2" sx={{ color: "secondary.light" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
        <Grid item xs={2}></Grid>
        {/*  */}
        <Grid item xs={5}>
          <Card
            variant="outlined"
            sx={{
              color: "primary.light",
              backgroundColor: "secondary.dark",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Who makes this stuff?
              </Typography>
              <Typography variant="body2" sx={{ color: "secondary.light" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/*  */}
      </Grid>
    </Box>
  );
}

export default About;
