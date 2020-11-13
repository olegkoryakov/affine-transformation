export interface IPoint {
  x: number,
  y: number,
}

export type TVector = Array<IPoint>

export type TPoints = Array<TVector>

export interface IAxisRange {
  from: number,
  to: number,
}

export interface IState {
  xRange: IAxisRange,
  yRange: IAxisRange,
  points: TPoints,
}

export interface IModel {
  getState(): IState,
  setState(state: Partial<IState>): void,
}
