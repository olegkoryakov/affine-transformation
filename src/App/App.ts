import flipMatrix from '../utils/flipMatrix';
import rotateMatrix from '../utils/rotateMatrix';
import scaleMatrix from '../utils/scaleMatrix';
import translateMatrix from '../utils/translateMatrix';
import Controller from './Controller/Controller';
import Model from './Model/Model';
import View from './View/View';
import { IController } from './Controller/types';
import { IModel, IState } from './Model/types';
import { IApp, IOptions } from './types';
import { IView } from './View/types';

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

export default class App implements IApp {
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

  transform(options: IOptions) {
    const {
      isFlipped, translateX, translateY, scaleX, scaleY, rotateTo,
    } = options;
    const { points } = initialState;
    const rotatedPoints = rotateMatrix(points, rotateTo * (Math.PI / 180));
    const flippedPoints = isFlipped ? flipMatrix(rotatedPoints) : rotatedPoints;
    const translatedPoints = translateMatrix(flippedPoints, translateX, translateY);
    const scaledPoints = scaleMatrix(translatedPoints, scaleX, scaleY);

    this.model.setState({ points: scaledPoints });
  }
}
