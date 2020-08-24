const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mern-boilerplate-admin:BoilerplatePassword1@mern-boilerplate.sasuz.mongodb.net/mern-boilerplate?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to mongo server"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.listen(5000);
