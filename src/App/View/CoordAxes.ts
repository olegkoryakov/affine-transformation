import valueToCoord from '../../utils/valueToCoord';
import { IState } from '../Model/types';

export default class CoordAxes {
  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  private drawPoints(
    xRange: IState['xRange'],
    yRange: IState['yRange'],
  ) {
    const { offsetWidth, offsetHeight } = this.canvas;
    const xCenter = offsetWidth / 2;
    const yCenter = offsetHeight / 2;
    const LINE_GAP = 10;
    const TEXT_GAP = LINE_GAP * 2.5;
    this.ctx.textAlign = 'center';
    // заполняю ось x
    for (let i = xRange.from + 1; i < xRange.to; i += 1) {
      if (i !== 0) {
        const xCoord = valueToCoord(i, xRange, offsetWidth);
        this.ctx.moveTo(xCoord, yCenter);
        this.ctx.lineTo(xCoord, yCenter + LINE_GAP);
        this.ctx.strokeText(i.toString(), xCoord, yCenter + TEXT_GAP);
      }
    }
    // заполняю ось y
    for (let i = xRange.from + 1; i < xRange.to; i += 1) {
      if (i !== 0) {
        const yCoord = valueToCoord(i, yRange, offsetHeight);
        this.ctx.moveTo(xCenter, yCoord);
        this.ctx.lineTo(xCenter + LINE_GAP, yCoord);
        this.ctx.strokeText(i.toString(), xCenter + TEXT_GAP, yCoord);
      }
    }
  }

  // отрисовка осей
  drawAxes(
    xRange: IState['xRange'],
    yRange: IState['yRange'],
  ) {
    const { offsetWidth, offsetHeight } = this.canvas;
    const xCenter = offsetWidth / 2;
    const yCenter = offsetHeight / 2;

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'blue';
    // ось х
    this.ctx.moveTo(0, yCenter);
    this.ctx.lineTo(offsetHeight, yCenter);
    // ось y
    this.ctx.moveTo(xCenter, 0);
    this.ctx.lineTo(xCenter, offsetWidth);
    // отрисовываем точки на осях
    this.drawPoints(xRange, yRange);

    this.ctx.stroke();
    this.ctx.closePath();
  }
}
