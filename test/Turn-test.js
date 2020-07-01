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

  it("should be able to return the guess", function () {
    const card = new Card(
      1,
      "What is your name?",
      ["Sue", "Ray", "Tim"],
      "Tim"
    );
    const turn = new Turn("Ray", card);

    const guess = turn.returnGuess();

    expect(guess).to.equal(turn.userGuess);
  });

  it("should be able to return the card", function () {
    const card = new Card(
      1,
      "What is your name?",
      ["Sue", "Ray", "Tim"],
      "Tim"
    );
    const turn = new Turn("Ray", card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.eql(turn.card);
  });

  it("should be able to check the guess", function () {
    const card = new Card(
      1,
      "What is your name?",
      ["Sue", "Ray", "Tim"],
      "Tim"
    );
    let turn = new Turn("Tim", card);

    expect(turn.evaluateGuess()).to.equal(true);

    turn = new Turn("Ray", card);

    expect(turn.evaluateGuess()).to.equal(false);
  });
});
