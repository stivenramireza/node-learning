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

  listPendingOrCompletedTasks(completed = true) {
    console.log(`\n`);
    let tasks = [];

    if (completed) {
      tasks = this.listArr.filter((task) => task.completedAt);
    } else {
      tasks = this.listArr.filter((task) => !task.completedAt);
    }

    tasks.forEach((task, i) => {
      const idx = `${i + 1}.`.blue;
      const { description, completedAt } = task;
      const status = completed ? completedAt.green : 'Pending'.red;
      console.log(`${idx} ${description} :: ${status}`);
    });
  }

  deleteTask(id = '') {
    if (this._list[id]) delete this._list[id];
  }

  toggleCompletedTasks(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completedAt) task.completedAt = new Date().toISOString();
    });

    this.listArr.forEach((task) => {
      if (!ids.includes(task.id)) this._list[task.id].completedAt = null;
    });
  }
}

module.exports = Tasks;
