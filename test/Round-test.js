const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Round", () => {
  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it("should store an instance of the Deck class", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.eql([card1, card2, card3]);
  });

  it("should be able to return the first card of the deck", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.eql(card1);
  });

  it("should start at turn 0", () => {
    const round = new Round();

    expect(round.turns).to.equal(0);
  });

  it("should start with no incorrect guesses", () => {
    const round = new Round();

    expect(round.incorrectGuesses).to.eql([]);
  });

  it("should check answers when taking a turn and advance the turns", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    const answerCardOne = round.takeTurn("sea otter");
    const answerCardTwo = round.takeTurn("spleen");

    expect(answerCardOne).to.equal("correct!");
    expect(answerCardTwo).to.equal("incorrect!");
    expect(round.turns).to.equal(2);
  });

  it("should add an incorrectly answered card id to incorrect Guesses", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn("sea otter");
    round.takeTurn("spleen");

    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0]).to.eql(card2.id);
  });

  it("should advance cards as turns are taken", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn("sea otter");
    round.takeTurn("spleen");

    expect(round.returnCurrentCard()).to.eql(card3);
  });

  it("should be able to calculate the percent of Correct guesses", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    round.takeTurn("playing with bubble wrap");

    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it("should be able to end a round", () => {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    round.takeTurn("playing with bubble wrap");

    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 66% of the questions correctly!"
    );
  });
});
