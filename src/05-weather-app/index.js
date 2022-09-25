const { readInput } = require('./helpers/inquirer');

const main = async () => {
  const name = await readInput('Enter your name: ');
  console.log(`Hello ${name}`);
};

main();
