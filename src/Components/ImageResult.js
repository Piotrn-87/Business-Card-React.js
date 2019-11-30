import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import { Card, Button, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  tile: {
    backgroundColor: "red"
  }
});

class ImageResult extends Component {
  state = {
    open: false,
    currentRepo: ""
  };
  render() {
    let repoListContent;
    const { repository } = this.props;
    if (repository) {
      repoListContent = (
        <GridList cols={2}>
          {repository.map(repo => (
            <GridTile
              title={repo.name}
              key={repo.id}
              subtitle={<span>{repo.description}</span>}
            ></GridTile>
          ))}
        </GridList>
      );
    } else {
      repoListContent = null;
    }
    return <Card>{repoListContent}</Card>;
  }
}

export default ImageResult;
