import { TPoints } from '../App/Model/types';
import multipleMatrices from './multipleMatrices';

const translateMatrix = (points: TPoints, x: number, y: number) => {
  // матрица смещения
  const translationMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [x, y, 1],
  ];

  return multipleMatrices(translationMatrix, points);
};

export default translateMatrix;
