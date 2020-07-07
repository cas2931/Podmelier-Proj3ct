import React from "react";  
import "./home.css"; 
// import LNAPI from "../utils/LNAPI.js";  
import SignupForm from '../components/SignupForm' 
// import amber from '@material-ui/core/colors/amber';

function Home ()  {   

  // state = {
  //   genres: [], 
  // };  

  // componentDidMount() {
  //   LNAPI.getAllGenres()
  //     .then(res => this.setState({ genres: res.data.genre.id }))

  return (   
<div>

{/* <div className="callout large primary" style={{backgroundColor: 'darkred' }}> 
  <div class="grid-x grid-margin-x"> 
    <div class="cell small-12">
      <div className="text-center">
      
  </div>  
  </div> 
  </div> 
  </div> */}

<div className="columns sticky-footer-css-body text-center" style={{backgroundImage: "url('./images/BlownAway.jpg')",
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat', 
           WebkitBackgroundSize:'cover', 
           MozBackgroundSize:'cover', 
           OBackgroundSize:'cover', 
         }}>

 <div className="row">
  <div className="grid-x align-center">
   <div className="cell medium-8">
    <h3>Podcast GridList</h3>  
    </div>
   </div>
  </div>
 
<br/> 

<div className="row">
  <div className="grid-x align-center">
   <div className="cell medium-8">
    <h3>Podcast GridList</h3>  
    </div>
   </div>
  </div>


<br/>

<div className="row">
  <div className="grid-x align-center">
   <div className="cell medium-8">
    <h3>Podcast GridList</h3>  
    </div>
   </div>
  </div> 

  </div> 

<div className="columns shrink footer text-center" style={{backgroundColor: 'black'}}> 
  <div className="grid-x"> 

    <div className="cell small-8">
      <img src='./images/ListenNotes-non-white-background.png' alt='ListenNotes' width='auto' height='auto'/>
    </div>

    <div className="cell small-4">
         <SignupForm></SignupForm>
    </div>
  </div>
</div>  

</div> 
  )
        } 
  
export default Home;