import readlineSync from 'readline-sync';
import runOfGreetingsGames from '../index.js';
import getRandom from '../utils.js';

const name = runOfGreetingsGames();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let step = 0;
let trueAnswer;

const prime = (x) => {
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

const runGivenNumberIsPrime = () => {
    while (step !== 3) {
        const number = getRandom(2, 100);
        prime(number);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        step += 1;
        if (answer === trueAnswer) {
            console.log('Correct!');
        } else if (answer !== trueAnswer) {
            return console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}. Let's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default runGivenNumberIsPrime;