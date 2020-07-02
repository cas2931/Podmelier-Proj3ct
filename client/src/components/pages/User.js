import React from "react";
import "./user.css" 

function User() {
  return (
    <div>
    <div className="callout large primary">
       <div className="text-center">
        <h1>Podmelier</h1>
        <h2 className="subheader">[Pronounced Pod-Molly-Yay!]</h2> 
        <h2 className="subheader">A Podcast Directory for Discretionary Taste</h2>
        </div>
    </div> 
  
  <article className="grid-container" style={{backgroundImage: "url('./images/BlownAway.jpg')",
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
         }}>  
  
  <br/>
  
   <div className="row">
    <div className="grid-x align-center">
     <div className="cell medium-8"> 
      <h3>Search Form Div</h3> 

     </div>
    </div> 
   </div>
  
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
    </div>
    );
  } 
  
  export default User;