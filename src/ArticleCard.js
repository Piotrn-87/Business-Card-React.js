import React from "react";
import { Button, CardHeader, Card, Avatar, CardMedia } from "@material-ui/core";

function ArticleCard(props) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>PN</Avatar>}
        title="Piotr Napieralski"
        subheader="2019-10-22"
      ></CardHeader>
      <CardMedia image="http://picsum.photos/id/1015/600/400"></CardMedia>
      <Button variant="contained">Read more</Button>
    </Card>
  );
}

export default ArticleCard;
