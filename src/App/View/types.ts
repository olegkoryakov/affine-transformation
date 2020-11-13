import { IState, TPoints } from '../Model/types';

export interface ICoordAxes {
  drawAxes(
    xRange: IState['xRange'],
    yRange: IState['yRange'],
  ): void;
}

export interface IFigure {
  drawFigure(
    xRange: IState['xRange'],
    yRange: IState['yRange'],
    points: TPoints): void,
}

export interface IView {
  render(state: IState): void,
}
