import runEngine, { numberRounds } from '../index.js';
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
  }
  return false;
};

const runGivenNumberIsPrime = () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const number = getRandomNumber(2, 100);
    const trueAnswer = isPrime(number) ? 'yes' : 'no';
    const questionVariant = String(number);
    rounds.push([trueAnswer, questionVariant]);
  }
  runEngine(rounds, description);
};

export default runGivenNumberIsPrime;
