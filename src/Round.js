class Round {
  constructor(deck = {}) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
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
