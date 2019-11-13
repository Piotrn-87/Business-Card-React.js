import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      loading: true,
      person: null,
      searchText: ""
    };
  }
  async componentDidMount() {
    fetch("https://api.randomuser.me/");
  }
}
