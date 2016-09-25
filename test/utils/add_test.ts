import add from "./../../src/utils/add";

describe("Add", function() {
  it("adds two numbers", function() {
    chai.expect(add(1, 2)).to.equal(3);
  });
})
