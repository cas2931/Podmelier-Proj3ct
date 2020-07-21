import React from "react";
import SpotifyTrackList from "../SpotifyTrackList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SpotifyPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    console.log(e.target.value);
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <TextField
          fullWidth="true"
          style={{ backgroundColor: "white" }}
          onChange={this.handleNameChange}
          defaultValue={this.props.playlistName}
        />

        <SpotifyTrackList
          isRemoval={true}
          onRemove={this.props.onRemove}
          tracks={this.props.playlistTracks}
        />

        <Button
          variant="contained"
          onClick={this.props.onSave}
          className="Playlist-save"
        >
          SAVE TO SPOTIFY
        </Button>
      </div>
    );
  }
}

export default SpotifyPlaylist;
