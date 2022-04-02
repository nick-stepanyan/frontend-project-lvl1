import readlineSync from 'readline-sync';

const startOfGreetingsGames = () => {
  console.log('Welcome to the Brain Games!');
  const askName = () => readlineSync.question('May I have your name?: ');
  const name = askName();
  return name;
};

export default startOfGreetingsGames;
