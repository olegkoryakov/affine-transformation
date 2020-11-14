import './styles.scss';
import App from './App/App';
import Controls from './Controls/Controls';

const root = document.querySelector('.affine-transformation__graph') as HTMLElement;
const controlsElement = document.querySelector('.controls') as HTMLElement;
// eslint-disable-next-line no-unused-vars
const app = new App({}, root);
// eslint-disable-next-line no-unused-vars
const controls = new Controls(controlsElement, app);
