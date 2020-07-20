import React from "react";
import "./user.css";

function User() {
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
              <h3>Spotify Search Form</h3>
            </div>
          </div>
        </div> 
        <br></br>
        <div className="row" style={{
            backgroundImage: "url('./images/wood2-opt.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
          }}>
          <div className="grid-x align-center">
            <div className="cell medium-8 text-center">
              <h3>Spotify Search Reults</h3>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row" 
        style={{
          backgroundImage: "url('./images/wood3-opt.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
          MozBackgroundSize: "cover",
          OBackgroundSize: "cover",
        }}>
          <div className="grid-x align-center">
            <div className="cell medium-8 text-center">
              <h3>Saved Podcast Collection</h3>
            </div>
          </div>
        </div> 

      </article>

      <div
        className="sticky-footer fluid text-center"
        style={{ backgroundColor: "black", 
        backgroundImage: "url('../images/spotify_Logo_RGB_White.png')",
        width: "100%",
        height: "250px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", }}
      >
        {/* <img
          src="..\images\Spotify_Logo_RGB_White.png"
          alt="Spotify"
          width="100%"
        /> */}
        <a style={{ color: "red" }} href="http://www.freepik.com">
          Designed by rawpixel.com / Freepik
        </a>
        <a style={{ color: "red" }} href="https://www.freepik.com/free-photos-vectors/pattern">
          Pattern photo created by rawpixel.com - www.freepik.com
        </a> 
        <a href="https://www.freepik.com/free-photos-vectors/background">Background photo created by rawpixel.com - www.freepik.com</a>
      </div>
    </div>
  );
}

export default User;
