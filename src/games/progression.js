import runEngine, { roundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (length, startNumber, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const current = startNumber + i * step;
    progression.push(current);
  }
  return progression;
};

const runMissingNumberTheProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const startNumberProgression = getRandomNumber(0, 20);
    const stepProgression = getRandomNumber(2, 5);
    const lengthProgression = getRandomNumber(5, 15);
    const hiddenIndex = getRandomNumber(0, lengthProgression - 1);
    const progression = getProgression(lengthProgression, startNumberProgression, stepProgression);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const questionVariant = `${progression.join(' ')}`;
    rounds.push([String(correctAnswer), questionVariant]);
  }
  runEngine(rounds, description);
};

export default runMissingNumberTheProgression;
