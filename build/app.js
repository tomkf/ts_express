"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("hello from express");
});
app.listen(3000, function () {
    console.log("express listneing on port 3000");
});
//# sourceMappingURL=app.js.map