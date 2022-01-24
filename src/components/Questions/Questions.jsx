// React Import
import React from "react";
// MUI Imports
import { Box, Grid, Typography } from "@mui/material";
// Local File Import
import QuestionItem from "../QuestionItem/QuestionItem";

function Questions() {
  const faqs = [
    { question: "This is a placeholder question", answer: "This is a placeholder answer" },
    { question: "p", answer: "l" },
    { question: "p", answer: "a" },
    { question: "p", answer: "c" },
    { question: "p", answer: "e" },
    { question: "p", answer: "h" },
    { question: "p", answer: "o" },
    { question: "p", answer: "l" },
    { question: "p", answer: "d" },
    { question: "p", answer: "e" },
    { question: "p", answer: "r" },
  ];
  
  return (
    <Box color="primary.light" backgroundColor="secondary.dark" sx={{ p: 2 }}>
      <Grid container rowSpacing={1} sx={{ p: 4 }}>
        <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h3">FAQs</Typography>
        </Grid>
        <Grid item xs={12}>
          {faqs.map((item, i) => {
            return <QuestionItem item={item} key={i} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Questions;
