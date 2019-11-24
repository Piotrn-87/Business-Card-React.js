import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      loading: true,
      person: null,
      searchText: "",
      images: []
    };
  }
  async componentDidMount() {
    // const url = "https://api.randomuser.me/";
    const url = "https://api.github.com/users/piotrn-87/repos";
    const response = await fetch(url);
    const data = await response.json();

    // fetch("https://api.github.com/users/piotrn-87/repos")
    //   .then(resp => resp.json)
    //   .then(resp => {
    //     const repository = resp;
    //     for (const repo of repository) {
    //       const { name, description, html_url } = repo;
    //     }
    //   });

    // this.setState({ person: data.results[0], loading: false });
    this.setState({ person: data[11], loading: false });
    console.log(this.state.person);
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
          // fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />

        <div>wait</div>

        {/* <div>
          {this.state.loading || !this.state.person ? (
            <div>loading ... </div>
          ) : (
            <div>
              <h1>{this.state.person.name.title}</h1>
              <h1>{this.state.person.name.first}</h1>
              <h1>{this.state.person.name.last}</h1>
              <img src={this.state.person.picture.large} />
              <h1>{this.state.person.location.city}</h1>
              <h1>{this.state.person.location.country}</h1>
            </div>
          )}
        </div> */}
      </div>
    );
  }
}

export default Search;

// onTextChange = e => {
//   const val = e.target.value;
//   this.setState({ [e.target.name]: val }, () => {
//     if (val === "") {
//       this.setState({ images: [] });
//     } else {
//       axios
//         .get(`https://api.github.com/users/${this.state.searchText}/repos`)
//         .then(res => this.setState({ images: res.data.hits }))
//         .catch(err => console.log(err));
//     }
//     console.log("log", this.state.images);
//   });
// };
