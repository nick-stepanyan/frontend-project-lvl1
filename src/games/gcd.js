import runOfGreetingsGames from '../index.js';
import getRandom from '../utils.js';
import { resultComplain } from '../index.js';


const rule = ('Find the greatest common divisor of given numbers.');
let name = runOfGreetingsGames(rule);

const divisor = (x, y) => {
    if (y > x) return divisor(y, x);
    if (!y) return x;
    return divisor(y, x % y);
};


const runTheGreatestCommonDivisor = () => {
    const taskArray = [];
    let steps = 0;
    while (steps !== 3) {

        const number = getRandom(2, 30);
        const number2 = getRandom(2, 30);
        const questionVariant = `${number} ${number2}`;
        let trueAnswer;
        trueAnswer = divisor(number, number2);
        trueAnswer = String(trueAnswer);
        taskArray.push([trueAnswer, questionVariant])
        steps += 1;
    }
    return taskArray;
};

resultComplain(runTheGreatestCommonDivisor(), name);

export default runTheGreatestCommonDivisor;