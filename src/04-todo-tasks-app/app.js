require('colors');

const { showMenu, pause: pauseMessage } = require('./helpers/messages');
const {
  inquireMenu,
  pause,
  readInput,
  listTasksToDelete,
  confirmDeletion,
  showChecklist,
} = require('./helpers/inquirer');
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

  if (tasksDB) tasks.loadTasks(tasksDB);

  do {
    opt = await inquireMenu();

    switch (opt) {
      case '1': // Create a task
        const description = await readInput('Description: ');
        tasks.createTask(description);
        break;
      case '2': // List tasks
        tasks.listFullTasks();
        break;
      case '3': // List completed tasks
        tasks.listPendingOrCompletedTasks(true);
        break;
      case '4': // List pending tasks
        tasks.listPendingOrCompletedTasks(false);
        break;
      case '5': // Complete tasks
        const ids = await showChecklist(tasks.listArr);
        tasks.toggleCompletedTasks(ids);
        break;
      case '6': // Delete a task
        const id = await listTasksToDelete(tasks.listArr);
        if (id === '0') break;
        const confirm = await confirmDeletion('Are you sure?');
        if (confirm) {
          tasks.deleteTask(id);
          console.log('Task has been deleted successfully');
        }
        break;
    }

    saveDB(tasks.listArr);
    await pause();
  } while (opt !== '0');
};

main();
