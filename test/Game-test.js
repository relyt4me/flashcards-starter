const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");
const Round = require("../src/Round");
const data = require("../src/data");
const prototypeQuestions = data.prototypeData;
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Game", () => {
  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it("should have a default empty current round", () => {
    const game = new Game();

    expect(game.currentRound).to.eql({});
  });

  it("should be able to start a round", () => {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it("should turn the prototype data into cards", () => {
    const game = new Game();

    const deck = game.createDeckOfCards(prototypeQuestions);

    expect(deck[0].id).to.equal(prototypeQuestions[0]["id"]);
    expect(deck[3].question).to.equal(prototypeQuestions[3]["question"]);
    expect(deck[13].answers).to.eql(prototypeQuestions[13]["answers"]);
  });
});
