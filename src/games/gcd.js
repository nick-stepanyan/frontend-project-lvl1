import readlineSync from 'readline-sync';
import start_of_greetings_games from '../index.js';
import getRandomInt from '../../utils/utils.js';

const find_the_greatest_common_divisor = () => {
    const name = start_of_greetings_games();
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');
    const mainLogig = () => {

        let steps = 0;
        let result = `Congratulations, ${name}!`;
        while (steps !== 3) {
            const number = getRandomInt(100);
            const number2 = getRandomInt(100);
            let trueAnswer;
            const Divisor = (x, y) => {
                if (x === y) {
                    return x;
                }
                if (x > y && x % y === 0) {
                    return y;
                }
                if (x < y && y % x === 0) {
                    return x;
                }
                if (x > y) {
                    let step = y;
                    while (step !== 1) {
                        step -= 1;
                        if (y % step === 0 && x % step === 0) {
                            return step;
                        }
                    }
                } else if (x < y) {
                    let step = x;
                    while (step !== 1) {
                        step -= 1;
                        if (x % step === 0 && y % step === 0) {
                            return step;
                        }
                    }
                }
                return true;
            };

            trueAnswer = Divisor(number, number2);
            trueAnswer = String(trueAnswer);

            console.log(`Question: ${number} ${number2}`);
            const answer = readlineSync.question('Your answer: ');
            steps += 1;
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

export default find_the_greatest_common_divisor;