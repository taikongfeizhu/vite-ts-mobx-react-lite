import { makeAutoObservable } from 'mobx';
import { injectable } from 'tsyringe';

@injectable()
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
