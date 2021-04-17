// https://mobx-react.js.org/
// https://mobx.js.org/README.html

import { Service } from 'typedi';
import { makeAutoObservable } from 'mobx';
import CommonStore from '../Common';

@Service()
class HomeStore {
  constructor(public commonStore: CommonStore) {
    makeAutoObservable(this);
  }

  count = 0;

  add = () => {
    this.count += 1;
  };

  reset = () => {
    this.count = 0;
    this.commonStore.setTitle();
  };

  sub = () => {
    this.count -= 1;
  };

  get compGet() {
    return this.count * 2;
  }
}

export default HomeStore;
