import React from "react"; 
import "./home.css"; 
// import LNAPI from "../utils/LNAPI.js";  
import SignupForm from '../components/SignupForm'; 
import ListenNoteResults from '../components/ListenNoteResults'

function Home() {   

  state = {
    genres: [], 
  };  

  componentDidMount() {
    LNAPI.getAllGenres()
        .then( res => this.setState({ genres: res.body.genres}))
        .catch(err => console.error(err));
}
// for (i = 0; i < genres.length; i++) {
//     render() { 
  return (   
<div>

<div className="columns sticky-footer-css-body text-center" style={{backgroundImage: "url('./images/BlownAway.jpg')",
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat', 
           WebkitBackgroundSize:'cover', 
           MozBackgroundSize:'cover', 
           OBackgroundSize:'cover', 
         }}>

<br/>
<ListenNoteResults></ListenNoteResults>

 {/* <div className="row">
  <div className="grid-x align-center">
   <div className="cell medium-8">
    <h3>Podcast GridList</h3>  
    </div>
   </div>
  </div> */}
 
<br/> 

{/* <div className="row">
  <div className="grid-x align-center">
   <div className="cell medium-8">
    <h3>Podcast GridList</h3>  
    </div>
   </div>
  </div> */}


<br/>

{/* <div className="row">
  <div className="grid-x align-center">
   <div className="cell medium-8">
    <h3>Podcast GridList</h3>  
    </div>
   </div>
  </div>  */}

  </div> 

<div className="columns shrink footer text-center" style={{backgroundColor: 'black'}}> 
  <div className="grid-x"> 

    <div className="cell small-8">
      <img src='./images/ListenNotes-non-white-background.png' alt='ListenNotes' width='100%' height='auto'/>
    </div>

    <div className="cell auto">
         <SignupForm></SignupForm>
    </div>
  </div>
</div>  

</div> 
  ) 
}
export default Home;