const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const router = require("../routes/index");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

module.exports = app;
