import React, { Component } from "react";
import ImageReslut from "./ImageResult";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

class Search extends Component {
  state = {
    amount: "",
    searchText: "",
    loading: true,
    url: "https://api.github.com/users",
    repository: []
  };

  onTextChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value }, () => {
      if (value === "") {
        this.setState({ repository: [] });
      } else {
        axios
          .get(`${this.state.url}/${value}/repos?sort=updated&direction=desc`)
          .then(response => {
            this.setState({
              // repository: response.data.slice(0, 4),
              repository: response.data,
              loading: false
            });
          })
          .catch(err => console.log("cant find github API"));
      }
    });
  };

  onAmountChange = (e, index, value) => {
    this.setState({
      amount: value
    });
  };

  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for github repository"
          fullWidth={true}
        ></TextField>
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5"></MenuItem>
          <MenuItem value={10} primaryText="10"></MenuItem>
          <MenuItem value={15} primaryText="15"></MenuItem>
          <MenuItem value={20} primaryText="20"></MenuItem>
          <MenuItem value={25} primaryText="25"></MenuItem>
        </SelectField>
        <br />
        {this.state.repository.length > 0 ? (
          <ImageReslut repository={this.state.repository} />
        ) : (
          <p>write user name</p>
        )}
      </div>
    );
  }
}

export default Search;
