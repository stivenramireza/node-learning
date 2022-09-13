require('colors');

const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = () => {
  showMenu();
  pause();
};

main();
