import runOfGreetingsGames from '../index.js';

const runAskNameGreeting = () => {
  const name = runOfGreetingsGames();
  console.log(`Hello, ${name}!`);
};

export default runAskNameGreeting;
