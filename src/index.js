import readlineSync from 'readline-sync';

export const welcomeStart = () => {
  console.log('Welcome to the Brain Games!');
  const askName = () => readlineSync.question('May I have your name?: ');
  const nameObj = askName();
  return nameObj;
};

// export const questionAnswer = (questionAns) => {
//         console.log(questionAns);

//     }
//     someTextNo, someTextElse, someTextAnoterElse) => {

//     console.log(questionAns);

//     let step = 0; // number of rounds
//     let result = `Congratulations, ${nameObj}`;

//     while (step !== 3) {
//         step += 1;
//         console.log(questionStandart, task);
//         if (answer === compareTrue) {
//             console.log('Correct!');
//         } else if (answer === 'yes') {
//             result = `${someTextNo }, ${nameObj}!`;
//             break;
//         } else if (answer === 'no') {
//             result = `${someTextElse }, ${nameObj}!`;
//             break;
//         } else {
//             result = ` ${someTextAnoterElse }, ${nameObj}`;
//             break;
//         }
//     }
//     return result;
// }
