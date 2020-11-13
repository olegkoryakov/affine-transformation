import { IAxisRange } from '../App/Model/types';
// вычисляет value относительно valuesRange
const valueToCoord = (value: number, valuesRange: IAxisRange, size: number) => {
  const { from, to } = valuesRange;
  const valuePart = (value - from) / (to - from);
  const coord = size * valuePart;
  return coord;
};

export default valueToCoord;
