import { IModel } from '../Model/types';
import { IView } from '../View/types';
import { IController } from './types';

export default class Controller implements IController {
  constructor(model: IModel, view: IView) {
    this.model = model;
    this.view = view;
    this.connect();
    this.render();
  }

  private view: IView;

  model: IModel;

  private connect() {
    this.model.subscribe('render', this.render.bind(this));
  }

  private render() {
    const state = this.model.getState();
    this.view.render(state);
  }
}
