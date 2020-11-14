import { IApp, IOptions } from '../App/types';
import './controls.scss';

export default class Controls {
  constructor(controlsElement: HTMLElement, app: IApp) {
    this.controlsElement = controlsElement;
    this.app = app;
    this.init();
  }

  private controlsElement: HTMLElement;

  private app: IApp;

  private init() {
    const applyButton = this.controlsElement.querySelector('.controls__apply-button') as HTMLButtonElement;
    applyButton.addEventListener('click', this.onApplyButtonClick);
  }

  private onApplyButtonClick = () => {
    const inputs = this.controlsElement.querySelectorAll('.controls__control-input');
    const options: any = {};
    inputs.forEach((element) => {
      const input = element as HTMLInputElement;
      const { type, id } = input;
      if (type === 'range') {
        const value = parseInt(input.value, 10);
        options[id] = value;
      } else if (type === 'checkbox') {
        const { checked } = input;
        options[id] = checked;
      }
    });

    this.app.transform(options as IOptions);
  }
}
