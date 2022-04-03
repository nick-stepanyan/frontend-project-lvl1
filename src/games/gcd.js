import readlineSync from 'readline-sync';
import startOfGreetingsGames from '../index.js';
import getRandomInt from '../utils.js';

const name = startOfGreetingsGames();
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const Divisor = (x, y) => {
  if (y > x) return Divisor(y, x);
  if (!y) return x;
  return Divisor(y, x % y);
};

let steps = 0;
const findTheGreatestCommonDivisor = () => {
  while (steps !== 3) {
    const number = getRandomInt(30);
    const number2 = getRandomInt(30);
    console.log(`Question: ${number} ${number2}`);
    let trueAns;
    trueAns = Divisor(number, number2);
    trueAns = String(trueAns);
    const answer = readlineSync.question('Your answer: ');
    steps += 1;
    if (answer === trueAns) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAns}.  Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default findTheGreatestCommonDivisor;
