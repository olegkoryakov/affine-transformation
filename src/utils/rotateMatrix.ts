import { TPoints } from '../App/Model/types';
import multipleMatrices from './multipleMatrices';

const rotateMatrix = (points: TPoints, angle: number) => {
  // матрица поворота
  const rotationMatrix = [
    [Math.cos(angle), Math.sin(angle), 0],
    [-Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1],
  ];

  return multipleMatrices(rotationMatrix, points);
};

export default rotateMatrix;
