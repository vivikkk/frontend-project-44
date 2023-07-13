import readlineSync from 'readline-sync';

import BrainGames from '../index.js';
import { getRandomInt, isPrime } from '../utils/index.js';

export default class BrainPrime extends BrainGames {
  constructor(...args) {
    super(...args);

    this.ATTEMPTS_COUNT = 1;
    this.YES_PHRASE = 'yes';
    this.NO_PHRASE = 'no';
    this.DESCRIPTION = `Answer "${this.YES_PHRASE}" if given number is prime. Otherwise answer "${this.NO_PHRASE}".`;
  }

  game() {
    this.currentValue = getRandomInt(this.MAX_RANDOM_VALUE);
    console.log(`${this.QUESTION_PHRASE}: ${this.currentValue}`);
    this.currentAnswer = readlineSync.question(`${this.YOUR_ANSWER_PHRASE}: `);
    this.correctAnswer = isPrime(this.currentValue)
      ? this.YES_PHRASE
      : this.NO_PHRASE;
  }
}
