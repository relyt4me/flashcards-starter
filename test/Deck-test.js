const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", () => {
  it("should be a function", () => {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should store an array of cards", () => {
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
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.eql([card1, card2, card3]);
  });

  it("should be abel to count the number of cards", () => {
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
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );

    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });
});
