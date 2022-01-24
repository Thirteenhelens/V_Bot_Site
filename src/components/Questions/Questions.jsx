// React Import
import React from "react";
// MUI Imports
import { Box, Grid, Typography } from "@mui/material";
// Local File Import
import QuestionItem from "../QuestionItem/QuestionItem";

function Questions() {
  const answers = ["p", "l", "a", "c", "e", "h", "o", "l", "d", "e", "r"];
  const questions = ["p", "l", "a", "c", "e", "h", "o", "l", "d", "e", "r"];
  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      <Grid container sx={{ p: 4 }}>
        <Grid item xs={12} sx={{ p: 1, textAlign: "center" }}>
          <Typography variant="h3">FAQs:</Typography>
        </Grid>
        <Grid item xs={12}>
          {questions.map((question, i) => {
            return <QuestionItem a={answers} q={question} key={i} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Questions;
