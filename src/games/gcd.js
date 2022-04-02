import readlineSync from 'readline-sync';
import startOfGreetingsGames from '../index.js';
import getRandomInt from '../utils.js';

const name = startOfGreetingsGames();
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let steps = 0;
const Divisor = (x, y) => {
  let b;
  while (x !== y) {
    if (x > y) {
      b = x - y;
    } else { b = y - x; }
  }
  return b;
};

const findTheGreatestCommonDivisor = () => {
  while (steps !== 23) {
    const number = getRandomInt(30);
    const number2 = getRandomInt(30);
    let trueAnswer;
    Divisor(number, number2);
    trueAnswer = Divisor(number, number2);
    trueAnswer = String(trueAnswer);
    console.log(`Question: ${number} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    steps += 1;
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.  Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default findTheGreatestCommonDivisor;
