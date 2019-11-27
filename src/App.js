import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import Axios from "./Components/Axios";
import { MuiThemeProvider } from "material-ui/styles";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <Search />
        <Axios />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
