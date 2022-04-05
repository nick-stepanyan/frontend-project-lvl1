import runOfGreetingsGames, { resultComplain } from '../index.js';
import getRandom from '../utils.js';

const rule = ('Find the greatest common divisor of given numbers.');
const name = runOfGreetingsGames(rule);

const divisor = (x, y) => {
  if (y > x) return divisor(y, x);
  if (!y) return x;
  return divisor(y, x % y);
};

const runTheGreatestCommonDivisor = () => {
  const taskArray = [];
  let step = 0;
  while (step !== 3) {
    const number = getRandom(2, 30);
    const number2 = getRandom(2, 30);
    const questionVariant = `${number} ${number2}`;
    let trueAnswer;
    trueAnswer = divisor(number, number2);
    trueAnswer = String(trueAnswer);
    taskArray.push([trueAnswer, questionVariant]);
    step += 1;
  }
  return taskArray;
};

resultComplain(runTheGreatestCommonDivisor(), name);

export default runTheGreatestCommonDivisor;
