const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8082;
const app = express();

if (process.env.NODE_ENV === "") {
  app.use(express.static("")); 
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, ""));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});