import runOfGreetingsGames, { showMainBlock } from '../index.js';
import getRandom from '../utils.js';

const rule = ('Answer "yes" if the number is even, otherwise answer "no".');
const name = runOfGreetingsGames(rule);

const getEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const runGameOfEvenNumber = () => {
  let step = 0;
  const taskArray = [];
  while (step !== 3) {
    const number = getRandom(2, 100);
    const questionVariant = `${number}`;
    let trueAnswer = '';
    trueAnswer = getEvenNumber(number);
    taskArray.push([trueAnswer, questionVariant]);
    step += 1;
  }
  return taskArray;
};

showMainBlock(runGameOfEvenNumber(), name);
export default runGameOfEvenNumber;
