import { IModel } from '../Model/types';
import { IView } from '../View/types';
import { IController } from './types';

export default class Controller implements IController {
  constructor(model: IModel, view: IView) {
    this.model = model;
    this.view = view;
    this.render();
  }

  private view: IView;

  model: IModel;

  private render() {
    const state = this.model.getState();
    this.view.render(state);
  }
}
