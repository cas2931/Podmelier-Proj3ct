import React from "react";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  return (
    <div>
      <div
        className="fixed-footer-css fluid"
        style={{ backgroundColor: "black" }}
      >
        <div className="row expanded flex-dir-column">
          <div className="grid-x auto">
            <div
              className="cell auto"
              style={{
                backgroundImage: "url('./images/butlerL3.jpg')",
                width: "100%",
                height: "550px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <img src='./images/podButler2.png' alt='Podmelier butler' style={{flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover'}}/> */}
            </div>

            <div
              className="cell auto"
              style={{
                backgroundImage: "url('./images/BlownAway.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="columns shrink header text-center">
                <ul className="menu align-center">
                  <li>
                    <Link
                      to="/"
                      className={
                        location.pathname === "/"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user"
                      className={
                        location.pathname === "/user"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      User
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="cell auto"
              style={{
                backgroundImage: "url('./images/butlerR3.jpg')",
                width: "100%",
                height: "550px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <img src='./images/revButler2.png' alt='Reverse butler' style={{flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'cover'}}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
