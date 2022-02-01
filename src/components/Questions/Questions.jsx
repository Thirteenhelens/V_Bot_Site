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
        <Grid item md={4} />
        <Grid item xs={12} md={4} sx={{ p: 2, textAlign: "center" }}>
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
        <Grid item md={4} />
        {/* The empty grid items are there for spacing */}
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
