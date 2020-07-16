import React, { Component } from "react";
import LNAPI from "../../utils/LNAPI";  

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import tileData from '../ListenNoteContainer/tileData';

class ListenNoteContainer extends Component { 
  state = { 
      genres: [], 
      podcasts:[]
  }; 

  componentDidMount() { 
    LNAPI.getAllGenres() 
      .then(res => this.setState({ genres: res.body.genres.id}))
      .catch(err => console.error(err));
  }; 

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    LNAPI.getTopLists(this.state.podcasts)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
 
  render() {  
  return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={5} style={{ height: 'auto' }}> 
                                  {/* {response.body.name} */}
          <ListSubheader component="div">December</ListSubheader> 
        </GridListTile>
        {tileData.map((podcast) => (
          <GridListTile key={podcast.image}>
            <img src={podcast.image} alt={podcast.title} />
            <GridListTileBar
              title={podcast.title}
              // subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${podcast.website}`}>
              
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}  
   
}
export default ListenNoteContainer;
