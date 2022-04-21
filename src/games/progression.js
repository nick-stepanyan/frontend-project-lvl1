import runEngine, { numRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (minLengthProgression) => {
  const arr = [];
  const startNumber = getRandomNumber(2, 20);
  const stepOfProgression = getRandomNumber(2, 7);
  let stepCount = startNumber;
  arr.push(startNumber);
  const lengthProgression = minLengthProgression + getRandomNumber(5, 6);
  for (let i = 0; i < lengthProgression; i += 1) {
    stepCount += stepOfProgression;
    arr.push(stepCount);
  }
  return arr;
};

const runMissingNumberTheProgression = () => {
  const taskArray = [];
  for (let i = 0; i < numRounds; i += 1) {
    const hideIndex = getRandomNumber(0, 14);
    const arr = generateProgression(hideIndex);
    const trueAnswer = arr[hideIndex];
    arr[hideIndex] = '..';
    const questionVariant = `${arr.join(' ')}`;
    taskArray.push([String(trueAnswer), questionVariant]);
  }
  runEngine(taskArray, description);
};

export default runMissingNumberTheProgression;
