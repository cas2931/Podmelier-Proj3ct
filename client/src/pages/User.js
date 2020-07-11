import React from "react";
import "./user.css" 

function User() {
  return (
    <div>
    <div className="callout large" style={{backgroundColor: 'darkred'}}>
       <div className="text-center">
        {/* <h1>Podmelier</h1>
        <h2 className="subheader">[Pronounced Pod-Molly-Yay!]</h2> 
        <h2 className="subheader">A Podcast Directory for Discretionary Taste</h2> */} 
        Search Form
        </div>
    </div> 
  
  <article className="grid-container fluid" style={{backgroundImage: "url('./images/BlownAway.jpg')",
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat', 
           WebkitBackgroundSize:'cover', 
           MozBackgroundSize:'cover', 
           OBackgroundSize:'cover', 
         }}>  
  
  <br/>
  
  
   <br/>
  
   <div className="row">
    <div className="grid-x align-center">
     <div className="cell medium-8">    
      <h3>Form Result Div</h3>  

     </div>
    </div> 
   </div> 
  
   <br/> 
  
  <div className="row">
   <div className="grid-x align-center">
    <div className="cell medium-8">
      <h3>Saved Podcast Div [MongoDB user collection representation</h3> 

    </div>
   </div>
  </div> 
  
  </article>   

  <div className="columns shrink footer text-center" style={{backgroundColor: 'black'}}>
  <img src='.\images\Spotify_Logo_RGB_White.png' alt='Spotify' width='100%' height='auto'/>
</div>  
    </div>
    );
  } 
  
  export default User;