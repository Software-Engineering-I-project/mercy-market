const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 8000;

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    req.body.name;
});

app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
