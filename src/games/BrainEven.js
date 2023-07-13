import readlineSync from 'readline-sync';

import BrainGames from '../index.js';
import { getRandomInt, isEven } from '../utils/index.js';

export default class BrainEven extends BrainGames {
  constructor(...args) {
    super(...args);

    this.YES_PHRASE = 'yes';
    this.NO_PHRASE = 'no';
    this.DESCRIPTION = `Answer "${this.YES_PHRASE}" if the number is even, otherwise answer "${this.NO_PHRASE}".`;
  }

  game() {
    this.currentValue = getRandomInt(this.MAX_RANDOM_VALUE);
    console.log(`${this.QUESTION_PHRASE}: ${this.currentValue}`);
    this.currentAnswer = readlineSync.question(`${this.YOUR_ANSWER_PHRASE}: `);
    this.correctAnswer = isEven(this.currentValue)
      ? this.YES_PHRASE
      : this.NO_PHRASE;
  }
}
