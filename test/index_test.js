"use strict";

const add = src("index.js").add;

describe("Add", function() {
  it("adds two numbers", function() {
    chai.expect(add(1, 2)).to.equal(3);
  });
})
