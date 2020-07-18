const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8082;
const mongoose = require("mongoose";)

app.use(express.urlencoded)({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongdb://localhost/testingMongo",
{
  useNewUrlParser: true,
  useFindAndModify: false,
}
)
const db = require("./models");

app.get("/test", ( req, res) => {
  res.json("It's working");
});

app.post("/test", async (req, res) => {

}
app.get("/test", function(req, res) => {
  console.log
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
