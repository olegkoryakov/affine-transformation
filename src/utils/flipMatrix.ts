import { TPoints } from '../App/Model/types';
import multipleMatrices from './multipleMatrices';

const flipMatrix = (points: TPoints) => {
  // матрица отражения
  const mirrorMatrix = [
    [1, 0, 0],
    [0, -1, 0],
    [0, 0, 1],
  ];

  return multipleMatrices(mirrorMatrix, points);
};

export default flipMatrix;
