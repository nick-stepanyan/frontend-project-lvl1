import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const askName = () => readlineSync.question('May I have your name?: ');
export const name = askName();
export const mainLogig = () => {
  // const name = askName();
  let step = 0; // number of rounds
  let result = `Congratulations, ${name}!`;
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  while (step !== 3) {
    const number = getRandomInt(101); // number generating
    console.log(number);
    const answer = readlineSync.question('Your answer: '); // answer
    step += 1;
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      result = `yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`;
      break;
    } else if (answer === 'no') {
      result = `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`;
      break;
    } else {
      result = `It is a wrong answer, try again, ${name}!`;
      break;
    }
  }
  return result;
};
