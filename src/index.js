import readlineSync from 'readline-sync';

export default class BrainGames {
  constructor() {
    this.MAX_RANDOM_VALUE = 30;
    this.ATTEMPTS_COUNT = 3;

    this.HELLO_PHRASE = 'Hello';
    this.NAME_QUESTION_PHRASE = 'May I have your name? ';
    this.GREETING_PHRASE = 'Welcome to the Brain Games!';
    this.CORRECT_PHRASE = 'Correct!';
    this.CONGRATULATION_PHRASE = 'Congratulations';
    this.TRY_AGAIN_PHRASE = 'Let\'s try again';
    this.QUESTION_PHRASE = 'Question';
    this.YOUR_ANSWER_PHRASE = 'Your answer';

    this.countOfCorrectAnswers = 0;
    this.userName = null;
    this.currentValue = null;
    this.currentAnswer = null;
    this.correctAnswer = null;
    this.continueGame = true;
  }

  greeting() {
    console.log(this.GREETING_PHRASE);
    this.userName = readlineSync.question(`${this.NAME_QUESTION_PHRASE} `);
    console.log(`${this.HELLO_PHRASE}, ${this.userName}!`);
  }

  printDescription() {
    console.log(this.DESCRIPTION);
  }

  question() {
    this.game();

    if (this.correctAnswer === this.currentAnswer) {
      this.countOfCorrectAnswers += 1;
      console.log(this.CORRECT_PHRASE);
      if (this.countOfCorrectAnswers >= this.ATTEMPTS_COUNT) {
        console.log(`${this.CONGRATULATION_PHRASE}, ${this.userName}!`);
        this.continueGame = false;
      }
    } else {
      console.log(`'${this.currentAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
      console.log(`${this.TRY_AGAIN_PHRASE}, ${this.userName}!`);
      this.continueGame = false;
    }
  }

  startGame() {
    this.greeting();
    this.printDescription();
    while (this.continueGame) {
      this.question();
    }
  }
}
