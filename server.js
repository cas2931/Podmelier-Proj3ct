require('dotenv').config()  
const compression = require('compression');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001; 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");  
const session = require("express-session");
const passport = require("passport"); 
const flash = require('connect-flash'); 
const cookieParser = require('cookie-parser'); 
const morgan = require('morgan') 
const routes = require('./routes');
const { authenticate } = require('passport');
 

const app = express(); 
 
app.use(compression())
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));  

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('connected');
// });

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());  
app.use(flash()); 


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/podmeiler_db", { useNewUrlParser: true }) 
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Send every request to the React app
// Define any API routes before this runs 

require('./config/passport')(passport); 
app.use('/api',routes)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
