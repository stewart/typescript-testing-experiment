import {add} from "../src/index.js";

describe("Add", function() {
  it("adds two numbers", function() {
    chai.expect(add(1, 2)).to.equal(3);
  });
})
