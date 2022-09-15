require('colors');

const { showMenu, pause: pauseMessage } = require('./helpers/messages');
const { inquireMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const { saveDB, readDB } = require('./helpers/db');

console.clear();

const main = async () => {
  let opt = '';

  // Manual CLI
  //   do {
  //     opt = await showMenu();
  //     console.log({ opt });
  //     if (opt !== '0') await pauseMessage();
  //   } while (opt !== '0');

  const tasks = new Tasks();
  const tasksDB = readDB();

  if (tasksDB) {
    tasks.loadTasks(tasksDB);
  }

  do {
    opt = await inquireMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Description: ');
        tasks.createTask(description);
        break;
      case '2':
        tasks.listFullTasks();
        break;
    }

    saveDB(tasks.listArr);
    await pause();
  } while (opt !== '0');
};

main();
