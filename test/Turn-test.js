const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should store a userGuess", () => {
    const turn = new Turn("answer");

    expect(turn.userGuess).to.equal("answer");
  });

  it("should store a card object", () => {
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

  it("should be able to return the guess", () => {
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

  it("should be able to return the card", () => {
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

  it("should be able to check the guess", () => {
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

  it("should be able to give feedback", () => {
    const card = new Card(
      1,
      "What is your name?",
      ["Sue", "Ray", "Tim"],
      "Tim"
    );
    let turn = new Turn("Tim", card);

    expect(turn.giveFeedback()).to.equal("correct!");

    turn = new Turn("Ray", card);

    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
