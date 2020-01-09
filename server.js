const express = require("express");
const app = express();
const connect = require("./connection/connectdb");

//// Init Middleware importante sa req.body {Saving, Update} ////
app.use(express.json({ extended: false }));

//// routers for db ////
app.use("/api/inventory", require("./routes/PrintData/stock"));

app.listen(connect.port(), function() {
  var datetime = new Date();
  var message =
    "Server running at " + connect.port() + " starting: " + datetime;
  console.log(message);
});
