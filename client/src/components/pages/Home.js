import React from "react"; 

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
        <article className="grid-container">  

<div className="row">
 <div className="grid-x align-center">
  <div className="cell medium-8">
   <div className="blog-post">
    <h3>Podcast GridList</h3>
   </div>   
  </div>
 </div>
</div>

<div className="row">
 <div className="grid-x align-center">
  <div className="cell medium-8">
   <div className="blog-post">
   <h3>Podcast GridList</h3>
   </div>
  </div>
</div> 
</div>

<div className="row">
<div className="grid-x align-center">
  <div className="cell medium-8">
    <div className="blog-post">
     <h3>Podcast GridList</h3>
    </div>
  </div>
 </div> 
</div> 

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