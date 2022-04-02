import readlineSync from 'readline-sync';
import start_of_greetings_games from '../index.js';
import getRandomInt from '../../utils/utils.js';

const start_game_of_even_number = () => {
    const name = start_of_greetings_games();
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const mainLogig = () => {
        let step = 0;
        let result = `Congratulations, ${name}!`;
        while (step !== 3) {
            const number = getRandomInt(101);
            console.log(`Question: ${number}`);
            const answer = readlineSync.question('Your answer: ');
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

    console.log(mainLogig());
};

export default start_game_of_even_number;