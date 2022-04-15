import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (x) => {
  let i = 0;
  let b = 0;
  while (i !== x) {
    i += 1;
    if (x % i === 0) {
      b += 1;
    }
  }
  if (b < 3) {
    return true;
  } return false;
};

const runGivenNumberIsPrime = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(2, 100);
    let trueAnswer;
    if (isPrime(number) === true) {
      trueAnswer = 'yes';
    } else trueAnswer = 'no';
    const questionVariant = `${number}`;
    taskArray.push([trueAnswer, questionVariant]);
  }
  runEngine(taskArray, description);
};

export default runGivenNumberIsPrime;
