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
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data.results[0], loading: false });
  }

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
          floatingLabelText="github repository"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          fullWidth={false}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />

        <div>
          {this.state.loading || !this.state.person ? (
            <div>loading ... </div>
          ) : (
            <div>
              <h1>{this.state.person.name.title}</h1>
              <h1>{this.state.person.name.first}</h1>
              <h1>{this.state.person.name.last}</h1>
              <img src={this.state.person.picture.large} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
