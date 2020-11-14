import scaleMatrix from '../../utils/scaleMatrix';
import { IState } from '../Model/types';
import { ICoordAxes, IFigure } from './types';
import CoordAxes from './CoordAxes';
import Figure from './Figure';

export default class View {
  constructor(root: HTMLElement) {
    this.root = root;
    this.init();
  }

  private root: HTMLElement;

  private wrapper!: HTMLElement;

  private canvas!: HTMLCanvasElement;

  private ctx!: CanvasRenderingContext2D;

  private coordAxes!: ICoordAxes;

  private figure!: IFigure;

  private init() {
    this.wrapper = document.createElement('div');
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.coordAxes = new CoordAxes(this.canvas, this.ctx);
    this.figure = new Figure(this.canvas, this.ctx);

    this.wrapper.append(this.canvas);
    this.wrapper.classList.add('app');

    this.root.append(this.wrapper);
  }

  // очищаем канвас
  private clearCanvas() {
    const { offsetHeight, offsetWidth } = this.canvas;
    this.ctx.clearRect(0, 0, offsetWidth, offsetHeight);
  }

  // рендерим картинку, систему координат и фигуру
  render(state: IState) {
    this.clearCanvas();
    const { yRange, xRange, points } = state;
    const { offsetWidth, offsetHeight } = this.root;
    this.canvas.width = offsetWidth;
    this.canvas.height = offsetHeight;

    this.coordAxes.drawAxes(xRange, yRange);
    this.figure.drawFigure(xRange, yRange, scaleMatrix(points, 1, 1));
  }
}
