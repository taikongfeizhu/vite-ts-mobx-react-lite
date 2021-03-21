// https://mobx-react.js.org/
// https://mobx.js.org/README.html

import { injectable, inject } from 'tsyringe';
import { makeAutoObservable } from 'mobx';
import { Tokens } from '../tokens';
import CommonStore from '../Common';

@injectable()
class HomeStore {
  constructor(@inject(Tokens.Common) public commonStore: CommonStore) {
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
