import { observable } from 'mobx';
import { pull, remove } from 'lodash';

class TodoStore {
  @observable completed;
  @observable all;
  @observable onHold;
  @observable filter;

  constructor() {
    this.completed = [1];

    this.all = [
      { id: 1, todo: 'Todo List 1' },
      { id: 2, todo: 'Todo List 2' },
      { id: 3, todo: 'Todo List 3' },
    ];

    this.onHold = [2, 3];
    this.filter = 'none';
  }

  getCompleted() {
    return this.matchId(this.completed);
  }

  getAll() {
    return this.all;
  }

  getOnHold() {
    return this.matchId(this.onHold);
  }

  getShown() {
    const cat = this.filter;

    if (cat === 'completed') {
      return this.getCompleted();
    }

    if (cat === 'onhold') {
      return this.getOnHold();
    }

    return this.getAll();
  }

  matchId(target) {
    const result = [];
    target.forEach(id => {
      this.all.forEach(todo => {
        if (todo.id === id) {
          result.push(todo);
        }
      });
    });

    return result;
  }

  setFilter(val) {
    this.filter = val;
  }

  setCompleted(id) {
    this.completed.push(id);
    this.setOnHold();
  }

  setUnCompleted(id) {
    this.completed = pull(this.completed, id);
    this.setOnHold();
  }

  setAll(item) {
    const
      todos = this.all,
      todosLen = todos.length;

    todos.push({
      id: todosLen + 1,
      todo: item,
    });

    this.setOnHold();
  }

  setOnHold() {
    const
      ids = [];

    this.all.forEach(n => {
      ids.push(n.id);
    });

    this.onHold = ids.filter(id => !this.completed.includes(id));
  }

  isCompleted(id) {
    return this.completed.includes(id);
  }

  deleteTodo(id) {
    this.all = remove(this.all, todo => todo.id !== id);
    this.completed = pull(this.completed, id);
    this.onHold = pull(this.onHold, id);
  }
}

export default new TodoStore();
