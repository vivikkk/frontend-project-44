import readlineSync from 'readline-sync';

import BrainGames from '../index.js';
import getRandomInt from '../utils/getRandomInt.js';

export default class BrainCalc extends BrainGames {
  constructor(...args) {
    super(...args);

    this.DESCRIPTION = 'What is the result of the expression?';
    this.OPERATORS = ['-', '+'];
    this.CURRENT_OPERATOR = null;
    this.FIRST_NUM = null;
    this.SECOND_NUM = null;
  }

  get getCorrectAnswer() {
    if (this.CURRENT_OPERATOR === '-') {
      return Number(this.FIRST_NUM) - Number(this.SECOND_NUM);
    }

    return Number(this.FIRST_NUM) + Number(this.SECOND_NUM);
  }

  game() {
    this.CURRENT_OPERATOR = this.OPERATORS[getRandomInt(this.OPERATORS.length)];
    this.FIRST_NUM = getRandomInt(this.MAX_RANDOM_VALUE);
    this.SECOND_NUM = getRandomInt(this.MAX_RANDOM_VALUE);

    console.log(`${this.QUESTION_PHRASE}: ${this.FIRST_NUM} ${this.CURRENT_OPERATOR} ${this.SECOND_NUM}`);
    this.currentAnswer = Number(readlineSync.question(`${this.YOUR_ANSWER_PHRASE}: `));
    this.correctAnswer = this.getCorrectAnswer;
  }
}
