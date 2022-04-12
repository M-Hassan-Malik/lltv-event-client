import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./EventCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function EventCard() {
  const classes = useStyles();

  return (
    <Box border={1} borderRadius="50%">
      <Card className={classes.root}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            <CardMedia
              className={classes.media}
              image="https://blog.e360.pk/wp-content/uploads/2020/01/events-party.jpg"
              title="Seven Rock Show"
            ></CardMedia>
            Seven Rock Show
          </Typography>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default EventCard;
