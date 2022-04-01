import readlineSync from 'readline-sync';
import welcomeStart from '../index.js';

const primeFunk = () => {
  const name = welcomeStart();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const mainLogig = () => {
    // const name = askName();
    let step = 0; // number of rounds
    let result = `Congratulations, ${name}!`;
    let trueAnswer;
    const getRandomInt = (max) => Math.floor((Math.random() * max) + 2);

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
      const number = x; // number generating
      Prime(number);
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: '); // answer
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

export default primeFunk;
