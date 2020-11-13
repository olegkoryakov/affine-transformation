import { TPoints } from '../App/Model/types';

// функция умножения матриц
const multipleMatrices = (matrixA: Array<Array<number>>, matrixB: TPoints) => {
  const multipliedMatrices = matrixB.map((vector) => vector.map(({ x, y }) => {
    const point = [x, y, 1];
    const translatedPoint = [0, 0, 0];
    matrixA.forEach((row, iIdx) => {
      row.forEach((num, jIdx) => {
        // умножаю строку matrixA на столбец matrixB
        translatedPoint[iIdx] += point[jIdx] * matrixA[jIdx][iIdx];
      });
    });
    const [translatedX, translatedY] = translatedPoint;
    return { x: translatedX, y: translatedY };
  }));

  return multipliedMatrices;
};

export default multipleMatrices;
