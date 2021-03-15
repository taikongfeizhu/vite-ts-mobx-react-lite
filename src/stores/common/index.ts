// https://mobx-react.js.org/
// https://mobx.js.org/README.html

import { makeAutoObservable } from 'mobx';

export default class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;

  add = () => {
    this.count += 1;
  };

  reset = () => {
    this.count = 0;
  };

  sub = () => {
    this.count -= 1;
  };

  get compGet() {
    return this.count * 2;
  }
}
