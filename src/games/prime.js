import runOfGreetingsGames, { resultComplain } from '../index.js';
import getRandom from '../utils.js';

const rule = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const name = runOfGreetingsGames(rule);

let trueAnswer;
const prime = (x) => {
  let i = 0;
  let b = 0;
  while (i !== x) {
    i += 1;
    if (x % i === 0) {
      b += 1;
    }
  }
  if (b < 3) {
    trueAnswer = 'yes';
  }
  if (b > 2) {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const runGivenNumberIsPrime = () => {
  let step = 0;
  const taskArray = [];
  while (step !== 3) {
    const number = getRandom(2, 100);
    trueAnswer = prime(number);
    const questionVariant = `${number}`;
    taskArray.push([trueAnswer, questionVariant]);
    step += 1;
  }
  return taskArray;
};

resultComplain(runGivenNumberIsPrime(), name);
export default runGivenNumberIsPrime;
