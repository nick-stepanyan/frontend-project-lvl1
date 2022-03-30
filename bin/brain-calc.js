#!/usr/bin/env node

import readlineSync from 'readline-sync';
import welcomeStart from '../src/index.js';

const name = welcomeStart();
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
const mainLogig = () => {
  // const name = askName();
  let step = 0; // number of rounds
  let result = `Congratulations, ${name}!`;
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  while (step !== 3) {
    const number = getRandomInt(101); // number generating
    const number2 = getRandomInt(101);
    const symbolOperand = getRandomInt(3);
    let trueAnswer;
    let operatorLogic2;
    switch (symbolOperand) {
      case 0:
        trueAnswer = number * number2;
        operatorLogic2 = '*';
        break;
      case 1:
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
    const answer = readlineSync.question('Your answer: '); // answer
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

export default mainLogig;
