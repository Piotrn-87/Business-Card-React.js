import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

class Search extends Component {
  state = {
    amount: "",
    searchText: "",
    url: "https://api.github.com/users/piotrn-87/repos",
    repository: []
  };

  onTextChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value }, () => {
      if (value === "") {
        this.setState({ repository: [] });
      } else {
        axios
          .get(`${this.state.url}`)
          .then(response => {
            this.setState({
              repository: response.data.slice(0, 4)
            });
          })
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => {
    this.setState({
      amount: value
    });
  };

  render() {
    const { repository } = this.state;
    const listRepository = repository.length ? (
      repository.map(repo => {
        return (
          <div key={repo.id}>
            <div>
              <span>{repo.name}</span>
              <p>{repo.full_name}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div>No repo left</div>
    );
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
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5"></MenuItem>
          <MenuItem value={10} primaryText="10"></MenuItem>
          <MenuItem value={15} primaryText="15"></MenuItem>
          <MenuItem value={20} primaryText="20"></MenuItem>
          <MenuItem value={25} primaryText="25"></MenuItem>
        </SelectField>
        <br />
        <div>{listRepository}</div>{" "}
      </div>
    );
  }
}

export default Search;
