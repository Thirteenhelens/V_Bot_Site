// React Import
import React from "react";

// MUI Imports
import {
  Card,
  styled,
  Collapse,
  IconButton,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";

// MUI Icon Imports
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

function QuestionItem({ item }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card variant="outlined" sx={{ backgroundColor: "secondary.semiDark" }}>
      <CardContent onClick={handleExpandClick}>
        <Typography variant="h4" color="primary.main">
          {item.question}
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          aria-label="show more"
          aria-expanded={expanded}
          onClick={handleExpandClick}
        >
          {expanded ? (
            <RemoveCircleRoundedIcon sx={{ color: "secondary.main" }} />
          ) : (
            <AddCircleRoundedIcon sx={{ color: "primary.main" }} />
          )}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle1" sx={{ color: "secondary.main" }}>
            {item.answer}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default QuestionItem;
