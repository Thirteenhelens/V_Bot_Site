// React Import
import React from "react";
// MUI Imports
import { Box, Grid, Typography } from "@mui/material";
// Local File Import
import QuestionItem from "./QuestionItem";

function Questions() {
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
        <Grid item xs={12} sx={{ p: 2, textAlign: "center" }}>
          <Box
            borderRadius={10}
            sx={{
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "secondary.semiDark",
                opacity: [0.9, 0.8, 0.7],
              },
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
