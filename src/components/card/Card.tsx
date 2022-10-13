import {
  Grid,
  Card as MuiCard,
  CardHeader,
  Typography,
  CardContent,
} from "@mui/material";
import React from "react";
import { CardProps } from "./CardProps";
const Card = function ({ title, children }: CardProps) {
  return (
    <Grid item xs>
      <MuiCard variant="outlined">
        <Grid item xs className="gridStyleCardHeader">
          <CardHeader
            className="styleCardHeader"
            avatar={<img src="" alt="logo" />}
          />
        </Grid>
        <Grid item xs className="gridStyleTitle">
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs>
          <CardContent>{children}</CardContent>
        </Grid>
      </MuiCard>
    </Grid>
  );
};

export default Card;
