import readlineSync from 'readline-sync';

const runEngine = (items, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  const step = 3;
  let i = 0;
  while (i < step) {
    console.log(`Question: ${items[i][1]}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = items[i][0];
    i += 1;
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runEngine;
