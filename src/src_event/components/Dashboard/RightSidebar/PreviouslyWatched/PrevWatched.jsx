import React from "react";
import "./PrevWatched.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function PrevWatched() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();

  return (
    <div className="event__card">
      <Card className={classes.root}>
        <CardActionArea>
          <Typography
          className='prev-watched'
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            
          >
            <CardMedia
              className={classes.media}
              image="https://blog.e360.pk/wp-content/uploads/2020/01/events-party.jpg"
              title="Contemplative Reptile"
            ></CardMedia>
            Seventy Rock Show
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default PrevWatched;
