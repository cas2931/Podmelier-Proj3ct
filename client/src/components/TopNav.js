import React from "react";
import { Link, useLocation } from "react-router-dom";  
import LoginForm from '../components/LoginForm';


function TopNav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
    return (
<div>
  <div className="sticky-footer-css" style={{backgroundColor: 'black'}}> 

    <div className="row expanded flex-dir-column"> 
      <div className="grid-x">  

        <div className="cell auto">
         <img src='./images/podButler2.png' alt='Podmelier butler' width='100%' height='auto'/>
        </div>

        <div className="cell auto">
          <div className="columns shrink header text-center">
            <p>The Podcast Directory for Discretionary Taste</p>
            <ul className="menu align-center">
            <li><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
                </Link></li>
            <li><Link to="/user" className={location.pathname === "/user" ? "nav-link active" : "nav-link"}>
            User
                </Link></li>
            </ul>
          </div> 
          <div className="columns shrink header text-center"> 
          <LoginForm></LoginForm> 
          </div>
        </div> 

    <div className="cell auto"> 
    <img src='./images/revButler2.png' alt='Reverse butler'width='100%' height='auto'/>
    </div>
  </div>
    
  </div> 
  </div>
</div>
      );
    }
    export default TopNav;