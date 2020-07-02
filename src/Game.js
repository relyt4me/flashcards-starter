const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("./Round");
const Card = require("../src/Card");
const Deck = require("./Deck");

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    const deck = new Deck(this.createDeckOfCards(prototypeQuestions));
    this.currentRound = new Round(deck);
  }

  createDeckOfCards(cardData) {
    return cardData.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
