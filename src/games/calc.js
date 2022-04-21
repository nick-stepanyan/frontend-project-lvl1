import runEngine, { numberRounds } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (number, number2, symbolOperand) => {
  switch (symbolOperand) {
    case '*':
      return number * number2;
    case '-':
      return number - number2;
    case '+':
      return number + number2;
    default:
      throw new Error(`Unknown operation symbol: '${symbolOperand}'!`);
  }
};

const runGameOfCalc = () => {
  const rounds = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const number = getRandomNumber(0, 20);
    const number2 = getRandomNumber(0, 10);
    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[randomIndex];
    const trueAnswer = calculate(number, number2, randomOperator);
    const questionVariant = `${number} ${randomOperator} ${number2}`;
    rounds.push([String(trueAnswer), questionVariant]);
  }
  runEngine(rounds, description);
};

export default runGameOfCalc;
