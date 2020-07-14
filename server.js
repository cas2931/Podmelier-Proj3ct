require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001; 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");

const app = express(); 
//Body-parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

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
