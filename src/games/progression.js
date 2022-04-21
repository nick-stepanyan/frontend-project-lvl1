import runEngine, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (lengthProgression, startNumberProgression, stepProgression) => {
  const progression = [];
  let stepCount = startNumberProgression;
  progression.push(startNumberProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    stepCount += stepProgression;
    progression.push(stepCount);
  }
  return progression;
};

const runMissingNumberTheProgression = () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const startNumberProgression = getRandomNumber(2, 20);
    const stepProgression = getRandomNumber(2, 5);
    const hiddenIndex = getRandomNumber(0, 14);
    const lengthProgression = hiddenIndex + stepProgression;
    const progression = getProgression(lengthProgression, startNumberProgression, stepProgression);
    const trueAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const questionVariant = `${progression.join(' ')}`;
    rounds.push([String(trueAnswer), questionVariant]);
  }
  runEngine(rounds, description);
};

export default runMissingNumberTheProgression;
