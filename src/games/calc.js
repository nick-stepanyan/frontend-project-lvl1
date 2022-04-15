import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const switchRandomOperation = (number, number2, symbolOperand) => {
  let trueAnswer;
  switch (symbolOperand) {
    case '*':
      trueAnswer = number * number2;
      break;
    case '-':
      trueAnswer = number - number2;
      break;
    default:
      trueAnswer = number + number2;
  }
  return trueAnswer;
};

const runGameOfCalc = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(0, 20);
    const number2 = getRandomNumber(0, 10);
    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[randomIndex];
    let trueAnswer = switchRandomOperation(number, number2, randomOperator);
    trueAnswer = String(trueAnswer);
    const questionVariant = `${number} ${randomOperator} ${number2}`;
    taskArray.push([trueAnswer, questionVariant]);
  }

  runEngine(taskArray, description);
};

export default runGameOfCalc;
