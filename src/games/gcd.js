import runOfGreetingsGames, { showMainBlock } from '../index.js';
import getRandom from '../utils.js';

const rule = ('Find the greatest common divisor of given numbers.');
const name = runOfGreetingsGames(rule);

const getCommonDivisor = (x, y) => {
  if (y > x) return getCommonDivisor(y, x);
  if (!y) return x;
  return getCommonDivisor(y, x % y);
};

const runTheGreatestCommonDivisor = () => {
  const taskArray = [];
  let step = 0;
  while (step !== 3) {
    const number = getRandom(2, 30);
    const number2 = getRandom(2, 30);
    const questionVariant = `${number} ${number2}`;
    let trueAnswer;
    trueAnswer = getCommonDivisor(number, number2);
    trueAnswer = String(trueAnswer);
    taskArray.push([trueAnswer, questionVariant]);
    step += 1;
  }

  return taskArray;
};

showMainBlock(runTheGreatestCommonDivisor(), name);

export default runTheGreatestCommonDivisor;
