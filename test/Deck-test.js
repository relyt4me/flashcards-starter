const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", function () {
  it("should be a function", function () {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });
});
