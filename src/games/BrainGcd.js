import readlineSync from 'readline-sync';

import BrainGames from '../index.js';
import { getRandomInt, getGcd } from '../utils/index.js';

export default class BrainGcd extends BrainGames {
  constructor(...args) {
    super(...args);

    this.DESCRIPTION = 'Find the greatest common divisor of given numbers.';

    this.FIRST_NUM = null;
    this.SECOND_NUM = null;
  }

  game() {
    this.FIRST_NUM = getRandomInt(this.MAX_RANDOM_VALUE);
    this.SECOND_NUM = getRandomInt(this.MAX_RANDOM_VALUE);

    console.log(`${this.QUESTION_PHRASE}: ${this.FIRST_NUM} ${this.SECOND_NUM}`);
    this.currentAnswer = Number(readlineSync.question(`${this.YOUR_ANSWER_PHRASE}: `));
    this.correctAnswer = getGcd(this.FIRST_NUM, this.SECOND_NUM);
  }
}
