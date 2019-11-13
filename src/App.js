import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { MuiThemeProvider } from "material-ui/styles";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
