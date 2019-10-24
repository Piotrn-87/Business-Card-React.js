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
    height: 200
  }
});

function ArticleCard(props) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>PN</Avatar>}
        title="Piotr Napieralski"
        subheader="2019-10-22"
      ></CardHeader>
      <CardMedia image="http://picsum.photos/id/1015/600/400"></CardMedia>
      <CardContent>
        <Typography variant="h6">
          Początkujący programista z wielkim zapałem do pracy i jeszcze większą
          checią poznawania nowych technologii. Jada zbyt kalorycznie, często
          podejmuje zle decyzje, zdarza mu się nie mówić ładnie. Nie lubi
          poranków i nie oglada Netflixa. Uwielbia bliski kontakt z naturą oraz
          zapach kawy o poranku.
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
