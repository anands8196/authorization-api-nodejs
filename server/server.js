const express = require("express");
const fs = require("fs");
const app = express();

const getData = require("../middleware/checkAuth.middleware");
const getToken = require("../middleware/getToken.middleware");

app.get("/", (req, res) => res.send("Hi, Welcome to Assignment"));
// app.get("/read_me", (req, res) => res.sendFile(__dirname + "/readme.md"));
app.get("/get_token/:code/", getToken);
app.get("/get_data", getData, (req, res) => {
  console.log("statusCode:", res.statusCode);
});
module.exports = app;
