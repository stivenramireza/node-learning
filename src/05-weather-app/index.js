const { readInput } = require('./helpers/inquirer');

const main = async () => {
    const name = await readInput('Enter your program name: ');
    console.log(`Hello ${name}`);
};

main();
