var express = require("express");
var http = require("http");
var app = express();
const PORT = process.env.PORT || 3000;
var server = http.createServer(app).listen(PORT);

app.use(express.static("./public"));


console.log("Starting Socket App - http://localhost:3000");
