import { IEvents } from './types';

export default class Observer {
  constructor() {
    this.events = {};
  }

  private events: IEvents;

  subscribe(name: string, callback: Function) {
    if (!this.events[name]) this.events[name] = [];
    this.events[name].push(callback);
  }

  fire(name: string, ...args: any) {
    if (!this.events[name]) {
      throw new Error(`${this.events[name]} not exist`);
    } else {
      this.events[name].forEach((callback) => { callback(...args); });
    }
  }
}
