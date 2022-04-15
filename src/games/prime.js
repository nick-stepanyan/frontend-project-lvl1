import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let trueAnswer;
const getPrimeTrueAnswer = (x) => {
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
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(2, 100);
    trueAnswer = getPrimeTrueAnswer(number);
    const questionVariant = `${number}`;
    taskArray.push([trueAnswer, questionVariant]);
  }
  runEngine(taskArray, description);
};

export default runGivenNumberIsPrime;
