import React, { Component } from "react";
import LNAPI from "../../utils/LNAPI";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import WebSharpIcon from "@material-ui/icons/WebSharp";

import CategorySharpIcon from '@material-ui/icons/CategorySharp';
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

class ListenNoteContainer extends Component {
  state = {
    genres: [],
    podcasts: [],
  };

  componentDidMount() {
    LNAPI.getAllGenres()
      .then(async (res) => {
        console.log(res.data.genres);
        const promises = res.data.genres.map((genre) => {
          // genre.id;
          return LNAPI.getTopLists(genre.id);
        });
        const podcasts = await Promise.all(promises);
        console.log(podcasts);
        this.setState({ podcasts });
      })
      .catch((err) => console.error(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        {this.state.podcasts.map(({ data }) => {
          return (
            <GridList
              flexWrap="nowrap"
              transform="translateZ(0)"
              cols={5}
              cellHeight={"auto"}
            >
              {data.podcasts.map((podcast) => (
                <GridListTile key={podcast.thumbnail}>
                  <img src={podcast.thumbnail} alt={podcast.title} />
                  <GridListTileBar
                    title={
                      <IconButton aria-label={`star ${podcast.title}`}>  
                        <Tooltip
                          title={podcast.description}
                          position="top"
                          trigger="click">
                          <InfoSharpIcon fontSize="large" color="primary" />
                        </Tooltip> 

                        <Tooltip
                          title={data.name}
                          position="top"
                          trigger="click"
                        >
                          <CategorySharpIcon style={{color:'green'}} fontSize="large" />
                        </Tooltip>

                        <a
                          href={podcast.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WebSharpIcon fontSize="large" color="secondary" />
                        </a> 

                        
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          );
        })}
      </div>
    );
  }
}
export default ListenNoteContainer;
