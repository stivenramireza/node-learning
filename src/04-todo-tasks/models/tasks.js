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
}

module.exports = Tasks;
