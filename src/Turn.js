class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }
  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.userGuess === this.card.correctAnswer;
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}
module.exports = Turn;

// [ ] Guess String argument
// - [ ] Card object argument
// - [ ] returnGuess
// - [ ] returnCard
// - [ ] evaluateGuess
// - [ ] giveFeedback
