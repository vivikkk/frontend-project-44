#!/usr/bin/env node
import readlineSync from 'readline-sync';

class BrainEven {
  constructor() {
    this.MAX_RANDOM_VALUE = 20;
    this.COUNT_TO_WIN = 3;
    this.GREETING_PHRASE = 'Welcome to the Brain Games!';
    this.DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.YES_PHRASE = 'yes';
    this.NO_PHRASE = 'no';
    this.CORRECT_PHRASE = 'Correct!';
    this.countOfCorrectAnswers = 0;
    this.userName = null;
    this.currentValue = null;
    this.currentAnswer = null;
    this.correctAnswer = null;
    this.continueGame = true;
  }

  get getRandomInt() {
    return Math.floor(Math.random() * this.MAX_RANDOM_VALUE);
  }

  get isEven() {
    return this.currentValue % 2 === 0;
  }

  greeting() {
    console.log(this.GREETING_PHRASE);
    this.userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.userName}!`);
  }

  printDescription() {
    console.log(this.DESCRIPTION);
  }

  question() {
    this.currentValue = this.getRandomInt;
    console.log(`Question: ${this.currentValue}`);
    this.currentAnswer = readlineSync.question('Your answer: ');
    this.correctAnswer = this.isEven
      ? this.YES_PHRASE
      : this.NO_PHRASE;

    if (this.correctAnswer === this.currentAnswer) {
      this.countOfCorrectAnswers += 1;
      console.log(this.CORRECT_PHRASE);
      if (this.countOfCorrectAnswers >= this.COUNT_TO_WIN) {
        console.log(`Congratulations, ${this.userName}!`);
        this.continueGame = false;
      }
    } else {
      console.log(`'${this.currentAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
      console.log(`Let's try again, ${this.userName}!`);
      this.continueGame = false;
    }
  }

  startBrainEvenGame() {
    this.greeting();
    this.printDescription();
    while (this.continueGame) {
      this.question();
    }
  }
}

const game = new BrainEven();

game.startBrainEvenGame();
