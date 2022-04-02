import start_of_greetings_games from '../index.js';

const start_askName_greeting = () => {
    const name = start_of_greetings_games();
    console.log(`Hello, ${name}!`);
};

export default start_askName_greeting;