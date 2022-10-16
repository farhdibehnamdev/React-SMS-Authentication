import {
  Grid,
  Card as MuiCard,
  CardHeader,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import React from "react";
import { cardStyle } from "./Card.style";
import { CardProps } from "./CardProps";
const Card = function ({ title, children, cardSize }: CardProps) {
  return (
    <Grid item xs sx={cardStyle(cardSize)}>
      <MuiCard variant="outlined" className="muiCard">
        <Grid container item className="gridStyleCardHeader">
          <CardHeader
            className="styleCardHeader"
            avatar={<img src="./img.jpg" alt="logo" />}
          />
        </Grid>
        <Grid item xs className="gridStyleTitle">
          <Typography className="typographyStyleTitle">{title}</Typography>
        </Grid>
        <Grid item xs>
          <CardContent className="styleCardContent">{children}</CardContent>
        </Grid>
      </MuiCard>
    </Grid>
  );
};

export default Card;
