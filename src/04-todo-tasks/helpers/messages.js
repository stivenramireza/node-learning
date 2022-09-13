require('colors');

const showMenu = () => {
  console.clear();

  console.log('========================'.green);
  console.log('   Select an option'.white);
  console.log('========================'.green);

  console.log(`${'1.'.green} Create task`);
  console.log(`${'2.'.green} List tasks`);
  console.log(`${'3.'.green} List completed tasks`);
  console.log(`${'4.'.green} List pending tasks`);
  console.log(`${'5.'.green} Complete task(s)`);
  console.log(`${'6.'.green} Delete task`);
  console.log(`${'0.'.green} Exit\n`);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Select an option: ', (opt) => {
    console.log({ opt });
    readline.close();
  });
};

const pause = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`\nPress ${'[ENTER]'.green} to continue\n`, () => {
    readline.close();
  });
};

module.exports = {
  showMenu,
  pause,
};
