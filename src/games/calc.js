import runOfGreetingsGames, { showMainBlock } from '../index.js';
import getRandom from '../utils.js';

const rule = ('What is the result of the expression?');
const name = runOfGreetingsGames(rule);

const switchRandomOperation = (number, number2, symbolOperand) => {
    let trueAnswer;
    let operatorLogic2;
    switch (symbolOperand) {
        case 2:
            trueAnswer = number * number2;
            operatorLogic2 = '*';
            break;
        case 3:
            trueAnswer = number - number2;
            operatorLogic2 = '-';
            break;
        default:
            trueAnswer = number + number2;
            operatorLogic2 = '+';
            break;
    }
    return { trueAnswer, operatorLogic2 };
};

const runGameOfCalc = () => {
    const taskArray = [];
    let step = 0;
    while (step !== 3) {
        const number = getRandom(0, 20);
        const number2 = getRandom(0, 10);
        const symbolOperand = getRandom(2, 5);
        const doubleFocus = switchRandomOperation(number, number2, symbolOperand);
        doubleFocus.trueAnswer = String(doubleFocus.trueAnswer);
        const questionVariant = `${number} ${doubleFocus.operatorLogic2} ${number2}`;
        taskArray.push([doubleFocus.trueAnswer, questionVariant]);
        step += 1;
    }
    return taskArray;
};

showMainBlock(runGameOfCalc(), name);

export default runGameOfCalc;