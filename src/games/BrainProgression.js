import readlineSync from 'readline-sync';

import BrainGames from '../index.js';
import { getRandomInt, getProgression } from '../utils/index.js';

export default class BrainProgression extends BrainGames {
  constructor(...args) {
    super(...args);

    this.DESCRIPTION = 'What number is missing in the progression?';
    this.SECRET_SYMBOL = '..';
    this.MIN_COUNT_OF_DIGITS = 5;
    this.MAX_COUNT_OF_DIGITS = 5;
    this.MAX_STEP = 5;

    this.progressionArray = null;
    this.start = null;
    this.step = null;
    this.countOfDigits = null;
    this.indexOfSecretSymbol = null;
  }

  get progressionString() {
    const cloneProgressionArray = [...this.progressionArray];

    cloneProgressionArray[this.indexOfSecretSymbol] = this.SECRET_SYMBOL;

    return cloneProgressionArray.join(' ');
  }

  game() {
    this.start = getRandomInt(this.MAX_RANDOM_VALUE);
    this.step = getRandomInt(this.MAX_STEP);
    this.countOfDigits = getRandomInt(this.MAX_COUNT_OF_DIGITS) + this.MIN_COUNT_OF_DIGITS;
    this.indexOfSecretSymbol = getRandomInt(this.countOfDigits - 1);
    this.progressionArray = getProgression(this.start, this.step, this.countOfDigits);

    console.log(`${this.QUESTION_PHRASE}: ${this.progressionString}`);
    this.currentAnswer = Number(readlineSync.question(`${this.YOUR_ANSWER_PHRASE}: `));
    this.correctAnswer = Number(this.progressionArray[this.indexOfSecretSymbol]);
  }
}
