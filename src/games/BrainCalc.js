import readlineSync from 'readline-sync';

import BrainGames from '../index.js';
import { getRandomInt, simpleCalc } from '../utils/index.js';

export default class BrainCalc extends BrainGames {
  constructor(...args) {
    super(...args);

    this.DESCRIPTION = 'What is the result of the expression?';
    this.OPERATORS = ['-', '+'];

    this.CURRENT_OPERATOR = null;
    this.FIRST_NUM = null;
    this.SECOND_NUM = null;
  }

  game() {
    this.CURRENT_OPERATOR = this.OPERATORS[getRandomInt(this.OPERATORS.length - 1)];
    this.FIRST_NUM = getRandomInt(this.MAX_RANDOM_VALUE);
    this.SECOND_NUM = getRandomInt(this.MAX_RANDOM_VALUE);

    console.log(`${this.QUESTION_PHRASE}: ${this.FIRST_NUM} ${this.CURRENT_OPERATOR} ${this.SECOND_NUM}`);
    this.currentAnswer = Number(readlineSync.question(`${this.YOUR_ANSWER_PHRASE}: `));
    this.correctAnswer = simpleCalc(this.FIRST_NUM, this.SECOND_NUM, this.CURRENT_OPERATOR);
  }
}
