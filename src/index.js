import readlineSync from 'readline-sync';

export const roundsCount = 3;

const runEngine = (items, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [correctAnswer, question] = items[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runEngine;
