import welcomeStart from '../index.js';

const cliFunk = () => {
  const name = welcomeStart();
  console.log(`Hello, ${name}!`);
};

export default cliFunk;
