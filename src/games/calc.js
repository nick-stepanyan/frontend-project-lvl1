import readlineSync from 'readline-sync';
import startOfGreetingsGames from '../index.js';
import getRandomInt from '../utils.js';

const runGameOfCalc = () => {
  const name = startOfGreetingsGames();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const mainLogig = () => {
    let step = 0;
    let result = `Congratulations, ${name}!`;
    while (step !== 3) {
      const number = getRandomInt(30);
      const number2 = getRandomInt(10);
      const symbolOperand = getRandomInt(3);
      let trueAnswer;
      let operatorLogic2;
      switch (symbolOperand) {
        case 2:
          trueAnswer = number * number2;
          operatorLogic2 = '*';
          break;
        case 3:
          trueAnswer = number - number2;
          operatorLogic2 = '-';
          break;
        default:
          trueAnswer = number + number2;
          operatorLogic2 = '+';
          break;
      }

      trueAnswer = String(trueAnswer);
      console.log(`Question: ${number} ${operatorLogic2} ${number2}`);
      const answer = readlineSync.question('Your answer: ');
      step += 1;
      if (answer === trueAnswer) {
        console.log('Correct!');
      } else {
        result = (`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.  Let's try again, ${name}!`);
        break;
      }
    }
    return result;
  };

  console.log(mainLogig());
};

export default runGameOfCalc;
