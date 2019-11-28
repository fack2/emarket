const path = require("path");
const express = require("express");
const app = express();
const router = require("./controller/index");
app.use(express.json());
app.use(express.urlencoded());

app.use(router);
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

module.exports = app;
