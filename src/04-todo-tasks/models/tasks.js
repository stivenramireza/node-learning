const Task = require('./task');

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  get listArr() {
    let list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  createTask(description = '') {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  loadTasks(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  listFullTasks() {
    console.log(`\n`);
    this.listArr.forEach((task, i) => {
      const idx = `${i + 1}.`.blue;
      const { description, completedAt } = task;
      const status = completedAt ? 'Completed'.green : 'Pending'.red;
      console.log(`${idx} ${description} :: ${status}`);
    });
  }
}

module.exports = Tasks;
