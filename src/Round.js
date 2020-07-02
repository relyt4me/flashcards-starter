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
    const guessedCard = this.deck.shift();
    const playerTurn = new Turn(guess, guessedCard);
    this.turns++;
    if (!playerTurn.evaluateGuess()) {
      this.incorrectGuesses.push(guessedCard.id);
    }
    return playerTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor(
      (100 * (this.turns - this.incorrectGuesses.length)) / this.turns
    );
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
