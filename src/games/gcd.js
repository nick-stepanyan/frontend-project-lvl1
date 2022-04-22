import runEngine, { roundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (x, y) => {
  if (y > x) return getCommonDivisor(y, x);
  if (!y) return x;
  return getCommonDivisor(y, x % y);
};

const runTheGreatestCommonDivisor = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(2, 30);
    const number2 = getRandomNumber(2, 30);
    const questionVariant = `${number} ${number2}`;
    const correctAnswer = getCommonDivisor(number, number2);
    rounds.push([String(correctAnswer), questionVariant]);
  }
  runEngine(rounds, description);
};

export default runTheGreatestCommonDivisor;
