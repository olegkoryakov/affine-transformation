import flipMatrix from '../utils/flipMatrix';
import rotateMatrix from '../utils/rotateMatrix';
import scaleMatrix from '../utils/scaleMatrix';
import translateMatrix from '../utils/translateMatrix';
import Controller from './Controller/Controller';
import { IController } from './Controller/types';
import Model from './Model/Model';
import { IModel, IState } from './Model/types';
import { IView } from './View/types';
import View from './View/View';

const initialState = {
  xRange: { from: -10, to: 10 },
  yRange: { from: 10, to: -10 },
  points: [
    [{ x: -2, y: 4 }, { x: 0, y: 2 }],
    [{ x: 0, y: 2 }, { x: 2, y: 4 }],
    [{ x: 2, y: 4 }, { x: 2, y: -5 }],
    [{ x: 2, y: -5 }, { x: -2, y: -3 }],
    [{ x: -2, y: -3 }, { x: -2, y: 4 }],
  ],
};

export default class App {
  constructor(state: Partial<IState>, root: HTMLElement) {
    this.init(state, root);
  }

  private model!: IModel;

  private view!: IView;

  private controller!: IController;

  private init(state: Partial<IState>, root: HTMLElement) {
    this.model = new Model({ ...initialState, ...state });
    this.view = new View(root);
    this.controller = new Controller(this.model, this.view);
  }

  translate(x: number, y: number) {
    const { points } = this.model.getState();
    const translatedPoints = translateMatrix(points, x, y);
    this.model.setState({ points: translatedPoints });
  }

  scale(x: number, y: number) {
    const validX = x <= 0 ? 0.1 : x;
    const validY = y <= 0 ? 0.1 : y;
    const { points } = this.model.getState();
    const scaledPoints = scaleMatrix(points, validX, validY);
    this.model.setState({ points: scaledPoints });
  }

  rotate(angle: number) {
    const { points } = this.model.getState();
    const rotatedPoints = rotateMatrix(points, angle);
    this.model.setState({ points: rotatedPoints });
  }

  flip() {
    const { points } = this.model.getState();
    const flippedMatrix = flipMatrix(points);
    this.model.setState({ points: flippedMatrix });
  }
}
