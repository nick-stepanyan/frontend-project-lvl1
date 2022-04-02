import readlineSync from 'readline-sync';
import startOfGreetingsGames from '../index.js';
import getRandomInt from '../../utils/utils.js';

const missingNumberTheProgression = () => {
  const name = startOfGreetingsGames();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let step = 0;
  let result = `Congratulations, ${name}!`;
  let trueAnswer;
  const arr = [];
  const Progression = (clear) => {
    arr.length = clear;
    const startNumber = getRandomInt(20);
    const stepOfProgression = getRandomInt(7);
    let stepCount = startNumber;
    arr.push(startNumber);
    for (let i = 0; i < 10; i += 1) {
      stepCount += stepOfProgression;
      arr.push(stepCount);
    }
    const indexArr = Math.floor(Math.random() * 10);
    trueAnswer = arr[indexArr];
    arr[indexArr] = '..';

    return arr.join(' ');
  };
  const mainLogig = () => {
    while (step !== 3) {
      Progression(0);
      trueAnswer = String(trueAnswer);
      console.log(`Question: ${arr.join(' ')}`);
      const answer = readlineSync.question('Your answer: '); // answer
      step += 1;
      if (answer === trueAnswer) {
        console.log('Correct!');
      } else {
        result = (`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.  Let's try again, ${name}!`);
        break;
      }
    }

    return result;
  };

  console.log(mainLogig());
};

export default missingNumberTheProgression;
