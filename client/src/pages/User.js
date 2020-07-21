import React from "react";
import Typography from "@material-ui/core/Typography"; 
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// import SpotifySearch from "../components/SpotifySearch";
// import SpotifyResults from "../components/SpotifyResults";
// import SPOTAPI from "../utils/SPOTAPI";
// import SpotifyPlaylist from "../components/SpotifyPlaylist";

class User extends React.Component {
 

  render() {
    return (
      <div>
        <article
          className="grid-container fluid"
          style={{
            backgroundColor: "darkred",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
          }}
        >
          <div
            className="row"
            style={{
              backgroundImage: "url('./images/wood1-opt.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover",
            }}
          >
            <div className="grid-x align-center">
              <div className="cell medium-8 text-center">
                <Typography variant="h3">Spotify Search</Typography>
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
              </div>
            </div>
          </div>
          <br></br>
          <div
            className="row"
            style={{
              backgroundImage: "url('./images/wood2-opt.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover",
            }}
          >
            <div className="grid-x align-center">
              <div className="cell medium-8 text-center">
                <Typography variant="h3">Search Results</Typography>
               
              </div>
            </div>
          </div>
          <br></br>
          <div
            className="row"
            style={{
              backgroundImage: "url('./images/wood3-opt.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover",
            }}
          >
            <div className="grid-x align-center">
              <div className="cell medium-8 text-center">
                <Typography variant="h3">Playlist Creator</Typography>
           
              </div>
            </div>
          </div>
        </article>

        <div
          className="sticky-footer fluid text-center"
          style={{
            backgroundColor: "black",
            backgroundImage: "url('../images/spotify_Logo_RGB_White.png')",
            width: "100%",
            height: "250px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  }
}

export default User;
