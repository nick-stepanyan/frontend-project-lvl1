import runEngine, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const k = Math.sqrt(n);
  for (let i = 2; i <= k; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
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
