export interface IOptions {
  rotateTo: number,
  translateX: number,
  translateY: number,
  scaleX: number,
  scaleY: number,
  isFlipped: boolean,
}

export interface IApp {
  transform(options: IOptions): void;
}
