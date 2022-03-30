#!/usr/bin/env node

import readlineSync from 'readline-sync';
import welcomeStart from '../src/index.js';

const name = welcomeStart();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const mainLogig = () => {
  // const name = askName();
  let step = 0; // number of rounds
  let result = `Congratulations, ${name}!`;
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  while (step !== 3) {
    const number = getRandomInt(101); // number generating
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: '); // answer
    step += 1;
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      result = `yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
      break;
    } else if (answer === 'no') {
      result = `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
      break;
    } else {
      result = `It is a wrong answer, try again, ${name}!`;
      break;
    }
  }
  return result;
};

console.log(mainLogig());
// const compareTrue = compareBasic();
// const someTextNo = (`yes' is wrong answer ;(.
// Correct answer was 'no'. Let's try again, ${nameObj}!`);
// const someTextElse = (`'no' is wrong answer ;(.
// Correct answer was 'yes'. Let's try again, ${nameObj}!`);
// const someTextAnoterElse = (`It is a wrong answer, try again, ${nameObj}!`)

// console.log(questionAnswer(questionAns, questionStandart, task, compareTrue,
//     someTextNo, someTextElse, someTextAnoterElse));

export default mainLogig;
