import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import { Card, Button, CardHeader } from "@material-ui/core";

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
        <GridList cols={3}>
          {repository.map(repo => (
            <GridTile
              title={repo.name}
              key={repo.id}
              subtitle={<span>{repo.full_name}</span>}
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
