"use strict";

process.env.NODE_ENV = "test";

const path = require("path");
const chai = require("chai");

function src(dest) {
  return require(path.join(__dirname, "..", "src", dest));
}

global.chai = chai;
global.src = src;