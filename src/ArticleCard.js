import React from "react";
import {
  Button,
  CardHeader,
  Card,
  Avatar,
  CardMedia,
  CardActions,
  IconButton,
  Icon,
  CardContent,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  media: {
    height: 200,
    padding: 20,
    "&:hover": {
      height: 400,
      transition: "1s"
    }
  },
  button: {
    background: "red",
    padding: 20,
    color: "green",
    "&:hover": {
      background: "yellow",
      transition: "1s"
    },
    img: {
      "&:hover": {
        height: 400
      }
    }
  }
});

function ArticleCard(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>PN</Avatar>}
        title="Piotr Napieralski"
        subheader="2019-10-22"
      ></CardHeader>
      <CardMedia
        className={classes.media}
        image="http://picsum.photos/id/1015/600/400"
      ></CardMedia>
      <CardContent>
        <Typography className={classes.button} variant="h6">
          Highly motivated self-taught Front End Developer who has started their
          journey without Computer Science Degree. Strongly focused on creating
          a good and clean code which is easy to read and maintain. Knowledge in
          JavaScript & React.js & HTML & CSS & GIT Always ready for new
          challenges and learn things in more deeper way.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>share</Icon>
        </IconButton>
        <Button variant="contained" color="primary">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

export default ArticleCard;
