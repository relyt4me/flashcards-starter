const Turn = require("../src/Turn");

class Round {
  constructor(deck = {}) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const playerTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    return playerTurn.giveFeedback();
  }
}

module.exports = Round;
// :sparkles: **Round Class and Test Suite** :sparkles:
// - [ ] returnCurrentCard
// - [ ] takeTurn
// - [ ] calculatePercentCorrect
// - [ ] endRound
// - [ ] take in responses and record guesses
// - [ ] testing
