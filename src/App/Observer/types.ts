export interface IEvents {
  [name: string]: Array<Function>,
}

export interface IObserver {
  fire(name: string, callback: Function): void,
  subscribe(name: string, callback: Function): void,
}
