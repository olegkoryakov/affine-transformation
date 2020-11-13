import { TPoints } from '../App/Model/types';
import multipleMatrices from './multipleMatrices';

const scaleMatrix = (points: TPoints, x: number, y: number) => {
  // матрица масштабирования
  const scalingMatrix = [
    [x, 0, 0],
    [0, y, 0],
    [0, 0, 1],
  ];

  return multipleMatrices(scalingMatrix, points);
};

export default scaleMatrix;
