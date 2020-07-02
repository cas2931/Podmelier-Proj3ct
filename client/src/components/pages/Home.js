import React from "react";  
import "./home.css"

function Home() {
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

 <br/> 

<div className="row">
 <div className="grid-x align-center">
  <div className="cell medium-8">
    <h3>Podcast GridList</h3>
  </div>
 </div>
</div> 

</article> 
  </div>
  );
} 

export default Home;