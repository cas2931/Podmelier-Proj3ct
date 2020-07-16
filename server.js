require('dotenv').config() 

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001; 
const mongoose = require("mongoose"); 
// const bodyParser = require("body-parser");  

var session = require("express-session");

var passport = require("./config/passport");
 

const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session()); 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/podmeiler_db", { useNewUrlParser: true }) 
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
