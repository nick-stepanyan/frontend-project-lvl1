import runEngine, { roundsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (number, number2, operatorQuestionVariant) => {
  switch (operatorQuestionVariant) {
    case '*':
      return number * number2;
    case '-':
      return number - number2;
    case '+':
      return number + number2;
    default:
      throw new Error(`Unknown operation symbol: '${operatorQuestionVariant}'!`);
  }
};

const runGameOfCalc = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(0, 20);
    const number2 = getRandomNumber(0, 10);
    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[randomIndex];
    const correctAnswer = calculate(number, number2, randomOperator);
    const questionVariant = `${number} ${randomOperator} ${number2}`;
    rounds.push([String(correctAnswer), questionVariant]);
  }
  runEngine(rounds, description);
};

export default runGameOfCalc;
