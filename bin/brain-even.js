#!/usr/bin/env node

import { name, mainLogig } from '../src/cli-even.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const finish = mainLogig();
console.log(finish);
