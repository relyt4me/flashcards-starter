const Turn = require("./Turn");

class Round {
  constructor(deck = {}) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const playerTurn = new Turn(guess, this.returnCurrentCard());
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
