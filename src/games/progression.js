import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const arrOfProgression = [];
  const startNumber = getRandomNumber(2, 20);
  const stepOfProgression = getRandomNumber(2, 7);
  let stepCount = startNumber;
  arrOfProgression.push(startNumber);
  for (let i = 0; i < 10; i += 1) {
    stepCount += stepOfProgression;
    arrOfProgression.push(stepCount);
  }
  return arrOfProgression;
};

const runMissingNumberTheProgression = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const arrOfProgression = generateProgression();
    const indexArr = Math.floor(Math.random() * 10);
    let trueAnswer = arrOfProgression[indexArr];
    arrOfProgression[indexArr] = '..';
    trueAnswer = String(trueAnswer);
    const questionVariant = `${arrOfProgression.join(' ')}`;
    taskArray.push([trueAnswer, questionVariant]);
  }
  runEngine(taskArray, description);
};

export default runMissingNumberTheProgression;
