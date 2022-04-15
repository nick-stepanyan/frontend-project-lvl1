import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (x, y) => {
  if (y > x) return getCommonDivisor(y, x);
  if (!y) return x;
  return getCommonDivisor(y, x % y);
};

const runTheGreatestCommonDivisor = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(2, 30);
    const number2 = getRandomNumber(2, 30);
    const questionVariant = `${number} ${number2}`;
    let trueAnswer;
    trueAnswer = getCommonDivisor(number, number2);
    trueAnswer = String(trueAnswer);
    taskArray.push([trueAnswer, questionVariant]);
  }
  runEngine(taskArray, description);
};

export default runTheGreatestCommonDivisor;
