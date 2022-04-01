import readlineSync from 'readline-sync';
import welcomeStart from '../index.js';

const progressionFunk = () => {
  const name = welcomeStart();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  const getRandomInt = (max) => Math.floor((Math.random() * max) + 2);
  let step = 0; // number of rounds
  let result = `Congratulations, ${name}!`;
  let trueAnswer;
  const arr = [];
  const Progression = (clear) => { // функция прогрессии
    arr.length = clear; // в начале работы функции очищаем массив
    const startNumber = getRandomInt(20); // первое, случайное число в прогрессии
    const stepOfProgression = getRandomInt(7); // случайный шаг прогрессии
    let stepCount = startNumber; // переменная для начала итерации
    arr.push(startNumber); // пихаем первый случайный элемент прогрессии в массив
    for (let i = 0; i < 10; i += 1) { // цикл с десятью шагами, для десяти элементов прогрессии
      stepCount += stepOfProgression;
      arr.push(stepCount);
    }
    const indexArr = Math.floor(Math.random() * 10); // создаем случайное число от 0 до 9
    trueAnswer = arr[indexArr]; // это число служит индексом в массиве
    arr[indexArr] = '..'; // здесь мы переписываем значения того индекса на точки (скрываем)

    return arr.join(' '); // здесь функция возвращает наш массив-прогрессию
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

export default progressionFunk;
