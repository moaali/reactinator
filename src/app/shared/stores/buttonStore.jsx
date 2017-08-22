import { action, observable } from 'mobx';

class ButtonStore {
  @observable count;

  constructor() {
    this.count = 0;
  }

  @action.bound
  inc() {
    this.count++;
  }
}

export default new ButtonStore();
