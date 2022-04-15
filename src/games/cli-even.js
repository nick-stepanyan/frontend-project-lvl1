import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenNumber = (number) => number % 2 === 0;

const runGameOfEvenNumber = () => {
    const taskArray = [];
    for (let i = 0; i < 3; i += 1) {
        const number = getRandomNumber(2, 100);
        const questionVariant = `${number}`;
        let trueAnswer;
        if (true === getEvenNumber(number)) {
            trueAnswer = 'yes';
        } else trueAnswer = 'no';

        taskArray.push([trueAnswer, questionVariant]);
    }
    runEngine(taskArray, description);
};

export default runGameOfEvenNumber;