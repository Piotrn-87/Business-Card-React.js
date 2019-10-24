import React from "react";
import "./App.css";
import ArticleCard from "./ArticleCard";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Container>
          <ArticleCard></ArticleCard>
        </Container>
      </CssBaseline>
    </div>
  );
}

export default App;
