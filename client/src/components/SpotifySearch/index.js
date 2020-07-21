import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SpotifySearch extends React.Component { 
  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params);
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  // constructor(props) {
  //   super(props);
  //   this.handleTermChange = this.handleTermChange.bind(this);
  //   this.search = this.search.bind(this);
  //   this.state = {
  //     term: "",
  //   };
  // }

  // handleTermChange(e) {
  //   this.setState({ term: e.target.value });
  // }

  // search() {
  //   this.props.onSearch(this.state.term);
  // }

  render() {
    return (
      <div>
        <TextField
          fullWidth="true"
          style={{ backgroundColor: "white" }}
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <Button
          variant="contained"
          onClick={this.search}
          className="SearchButton"
        >
          SEARCH
        </Button>
      </div>
    );
  }
}

export default SpotifySearch;
