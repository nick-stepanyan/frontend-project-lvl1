import readlineSync from 'readline-sync';

export const numRounds = 3;

const runEngine = (items, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < numRounds; i += 1) {
    const question = items[i][1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = items[i][0];
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runEngine;
