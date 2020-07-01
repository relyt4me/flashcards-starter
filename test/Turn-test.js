const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", function () {
  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should store a userGuess", function () {
    const turn = new Turn("answer");

    expect(turn.userGuess).to.equal("answer");
  });

  it("should store a card object", function () {
    const card = new Card(
      1,
      "What is your name?",
      ["Sue", "Ray", "Tim"],
      "Tim"
    );
    const turn = new Turn("Tim", card);

    expect(turn.card).to.be.a("object");
    expect(turn.card).to.eql(card);
  });

  it("should store a card object", function () {
    const card = new Card(
      1,
      "What is your name?",
      ["Sue", "Ray", "Tim"],
      "Tim"
    );
    const turn = new Turn("answer", card);

    expect(turn.card).to.be.a("object");
    expect(turn.card).to.eql(card);
  });
});
