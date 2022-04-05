import readlineSync from 'readline-sync';
import runOfGreetingsGames from '../index.js';
import getRandom from '../utils.js';

const name = runOfGreetingsGames();
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let step = 0;
let trueAnswer;
const arr = [];

const progression = (clear) => {
    arr.length = clear;
    const startNumber = getRandom(20);
    const stepOfProgression = getRandom(7);
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
    while (step !== 3) {
        progression(0);
        trueAnswer = String(trueAnswer);
        console.log(`Question: ${arr.join(' ')}`);
        const answer = readlineSync.question('Your answer: '); // answer
        step += 1;
        if (answer === trueAnswer) {
            console.log('Correct!');
        } else {
            return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.  Let's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default runMissingNumberTheProgression;