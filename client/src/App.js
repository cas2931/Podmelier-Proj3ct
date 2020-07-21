import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from './pages/Home.js';
import User from './pages/User.js';
import TopNav from './components/TopNav.js'; 
import LoginForm from './components/LoginForm'; 
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} /> 
        <Route exact path="/login" component={LoginForm}/> 
        <Route exact path="/signup" component={SignupForm}/>
      </div>
    </Router>
    );
  }

export default App;
