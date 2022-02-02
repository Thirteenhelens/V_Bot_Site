// React Import
import React from "react";
// MUI Imports
import { Box, Grid, Typography } from "@mui/material";
// Local File Import
import QuestionItem from "./QuestionItem";

function Questions() {
  // Here is where all of the questions and answers are stored.
  // A DB might be a better choice, but I'm rather lazy.
  const faqs = [
    {
      question: "This is a placeholder question",
      answer: "This is a placeholder answer",
    },
    { question: "Q2", answer: "A2" },
    { question: "Q3", answer: "A3" },
    { question: "Q4", answer: "A4" },
    { question: "Q5", answer: "A5" },
  ];

  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      <Grid container rowSpacing={1} sx={{ p: 4 }}>
        <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
          <Box
            borderRadius={10}
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="h3" sx={{ color: "secondary.dark" }}>
              FAQs
            </Typography>
          </Box>
        </Grid>
        {faqs.map((item, i) => {
          return (
            <Grid item xs={12} key={i}>
              <QuestionItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Questions;
