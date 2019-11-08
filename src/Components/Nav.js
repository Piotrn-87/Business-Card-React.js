import React from "react";
import AppBar from "material-ui/AppBar";
import { MuiThemeProvider } from "material-ui/styles";
import TextField from "material-ui/TextField";

const NavBar = () => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Lists User GitHub Repository"></AppBar>
        <TextField
          hintText="Enter UserName"
          floatingLabelText="Enter GitHub User Name"
        ></TextField>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default NavBar;
