var express = require("express");
const router = require('./routes');
const { listen } = require("./handlers");

var app = express();
const port =  process.argv[2] || 3000;

app.use('/', router);

app.listen(port, () => listen(port));
