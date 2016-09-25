"use strict";

process.env.NODE_ENV = "test";

require("mocha");

const path = require("path");
const chai = require("chai");

require("source-map-support/register");

function src(dest) {
  return require(path.join(__dirname, "..", "src", dest));
}

global.chai = chai;
global.src = src;
