const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("./Round");
const Card = require("../src/Card");

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    this.currentRound = new Round();
  }

  createDeckOfCards(cardData) {
    let cards = [];
    cardData.forEach((card) => {
      cards.push(
        new Card(card.id, card.question, card.answers, card.correctAnswer)
      );
    });
    return cards;
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
