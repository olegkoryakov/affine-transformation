import Observer from '../Observer/Observer';
import { IModel, IState } from './types';

export default class Model extends Observer implements IModel {
  constructor(state: IState) {
    super();
    this.state = state;
  }

  private state: IState;

  getState() {
    return { ...this.state };
  }

  setState(state: Partial<IState>) {
    this.state = { ...this.state, ...state };
    this.fire('render', state);
  }
}
