import React, { Component } from "react";
import LNAPI from "../../utils/LNAPI";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton"; 
import InfoSharpIcon from '@material-ui/icons/InfoSharp'; 
import Button from '@material-ui/core/Button';
import WebSharpIcon from '@material-ui/icons/WebSharp'; 
import Popover from '@material-ui/core/Popover'; 
import Typography from '@material-ui/core/Typography'  
import Chip from '@material-ui/core/Chip'; 
import { PortalWithState } from 'react-portal';





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
        const podcasts = await Promise.all(promises) 
        console.log(podcasts)
        this.setState({podcasts})
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

<div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'}}>

 {this.state.podcasts.map(({data}) => { return ( 
      <GridList  flexWrap='nowrap' transform='translateZ(0)' cols={5} cellHeight={"auto"}>
        {data.podcasts.map((podcast) => (
          <GridListTile key={podcast.thumbnail}>
            <img src={podcast.thumbnail} alt={podcast.title}/>
            <GridListTileBar
              title={  
                  <IconButton aria-label={`star ${podcast.title}`}> 
                    <a href={podcast.website} target="_blank" rel="noopener noreferrer">
                      <WebSharpIcon fontSize = 'large' color='secondary' /> 
                    </a> 
                    <Chip style={{color: 'black', fontWeight: 'bold',}} label= {data.name} />   

                    <PortalWithState closeOnOutsideClick closeOnEsc>
                      {({ openPortal, closePortal, isOpen, portal }) => (
                      <React.Fragment>
                        <button onClick={openPortal}>
                          <InfoSharpIcon fontSize = 'large' color ='primary'/> 
                        </button>
                        {portal(
                            <div>{podcast.description}</div>
                          )}
                       </React.Fragment>
                      )}
                      </PortalWithState>

                      {/* <InfoSharpIcon fontSize = 'large' color ='primary'/>  */}
                    
                  </IconButton> 
                }
            />
          </GridListTile>
        ))}
      </GridList> 
 )})}  
 </div> 
 );
  }
 } 
export default ListenNoteContainer; 
