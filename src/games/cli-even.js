import readlineSync from 'readline-sync';
import runOfGreetingsGames from '../index.js';
import getRandom from '../utils.js';

const name = runOfGreetingsGames();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const runGameOfEvenNumber = () => {
    let step = 0;
    while (step !== 3) {
        const number = getRandom(2, 100);
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        step += 1;
        if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
            console.log('Correct!');
        } else if (answer === 'yes') {
            console.log(`yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
            break;
        } else if (answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
            break;
        } else {
            return console.log(`It is a wrong answer, try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default runGameOfEvenNumber;