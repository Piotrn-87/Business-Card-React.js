import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import { MuiThemeProvider } from "material-ui/styles";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
