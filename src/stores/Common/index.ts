import { makeAutoObservable } from 'mobx';
import { Service } from 'typedi';

@Service()
class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }

  title = 'Hello Vite + React!!!';

  setTitle() {
    console.log(this.title, 'from common');
  }
}

export default CommonStore;
