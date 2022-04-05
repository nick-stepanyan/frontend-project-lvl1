import runOfGreetingsGames, { showMainBlock } from '../index.js';
import getRandom from '../utils.js';

const rule = ('What number is missing in the progression?');
const name = runOfGreetingsGames(rule);

let step = 0;
let trueAnswer;
const arr = [];

const generateProgression = (clear) => {
    arr.length = clear;
    const startNumber = getRandom(2, 20);
    const stepOfProgression = getRandom(2, 7);
    let stepCount = startNumber;
    arr.push(startNumber);
    for (let i = 0; i < 10; i += 1) {
        stepCount += stepOfProgression;
        arr.push(stepCount);
    }
    const indexArr = Math.floor(Math.random() * 10);
    trueAnswer = arr[indexArr];
    arr[indexArr] = '..';

    return arr.join(' ');
};

const runMissingNumberTheProgression = () => {
    const taskArray = [];
    while (step !== 3) {
        generateProgression(0);
        trueAnswer = String(trueAnswer);
        const questionVariant = `${arr.join(' ')}`;
        taskArray.push([trueAnswer, questionVariant]);
        step += 1;
    }
    return taskArray;
};

showMainBlock(runMissingNumberTheProgression(), name);
export default runMissingNumberTheProgression;