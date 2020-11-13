import valueToCoord from '../../utils/valueToCoord';
import { IState, TPoints } from '../Model/types';
import { IFigure } from './types';

export default class Figure implements IFigure {
  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  drawFigure(xRange: IState['xRange'], yRange: IState['yRange'], points: TPoints) {
    const { offsetWidth, offsetHeight } = this.canvas;
    points.forEach(([startLine, endLine]) => {
      this.ctx.moveTo(
        valueToCoord(startLine.x, xRange, offsetWidth),
        valueToCoord(startLine.y, yRange, offsetHeight),
      );
      this.ctx.lineTo(
        valueToCoord(endLine.x, xRange, offsetWidth),
        valueToCoord(endLine.y, yRange, offsetHeight),
      );
    });
    this.ctx.stroke();
  }
}
