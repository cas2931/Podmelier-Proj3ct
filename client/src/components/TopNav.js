import React from "react";
import { Link, useLocation } from "react-router-dom"; 

function TopNav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
    return (
  
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className={location.pathname === "/user" ? "nav-link active" : "nav-link"}>
                User
                </Link>
             </li>
            </ul>
          </div>
        </div>
      );
    }
    export default TopNav;