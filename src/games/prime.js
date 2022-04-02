import readlineSync from 'readline-sync';
import startOfGreetingsGames from '../index.js';
import getRandomInt from '../utils.js';

const givenNumberIsPrime = () => {
  const name = startOfGreetingsGames();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const mainLogig = () => {
    let step = 0;
    let result = `Congratulations, ${name}!`;
    let trueAnswer;

    const Prime = (x) => {
      let i = 0;
      let b = 0;
      while (i !== x) {
        i += 1;
        if (x % i === 0) {
          b += 1;
        }
      }
      if (b < 3) {
        trueAnswer = 'yes';
      }
      if (b > 2) {
        trueAnswer = 'no';
      }
      return trueAnswer;
    };
    while (step !== 3) {
      const x = getRandomInt(100);
      const number = x;
      Prime(number);
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');
      step += 1;
      if (answer === trueAnswer) {
        console.log('Correct!');
      } else if (answer !== trueAnswer) {
        result = (`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}. Let's try again, ${name}!`);
        break;
      }
    }
    return result;
  };

  console.log(mainLogig());
};

export default givenNumberIsPrime;
