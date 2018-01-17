import { action, observable } from 'mobx';

class ButtonStore {
  @observable count;

  constructor() {
    this.count = 0;
  }

  inc() {
    this.count++;
  }
}

export default new ButtonStore();
