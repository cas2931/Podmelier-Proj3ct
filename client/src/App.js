import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from './pages/Home.js';
import User from './pages/User.js';
import TopNav from './components/TopNav.js'  

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
      </div>
    </Router>
    );
  }

export default App;
