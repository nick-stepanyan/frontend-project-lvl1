import runEngine, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const runGameOfEvenNumber = () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const number = getRandomNumber(2, 100);
    const questionVariant = String(number);
    const trueAnswer = isEven(number) ? 'yes' : 'no';
    rounds.push([trueAnswer, questionVariant]);
  }
  runEngine(rounds, description);
};

export default runGameOfEvenNumber;
