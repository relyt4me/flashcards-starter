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
    const playerTurn = new Turn(guess, this.deck.shift());
    this.turns++;
    if (!playerTurn.evaluateGuess()) {
      this.incorrectGuesses.push(playerTurn.returnCard().id);
    }
    return playerTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor(
      (100 * (this.turns - this.incorrectGuesses.length)) / this.turns
    );
  }

  endRound() {
    console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    );
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
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
