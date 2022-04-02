import startOfGreetingsGames from '../index.js';

const startAskNameGreeting = () => {
  const name = startOfGreetingsGames();
  console.log(`Hello, ${name}!`);
};

export default startAskNameGreeting;
