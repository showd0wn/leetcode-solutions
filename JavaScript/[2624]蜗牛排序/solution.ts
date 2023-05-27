declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
  if (this.length != rowsCount * colsCount) {
    return [];
  }

  const res = Array.from({ length: rowsCount }).map(() => new Array<number>(colsCount));

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < colsCount; j++) {
      if (j % 2 == 0) {
        res[i][j] = this[rowsCount * j + i];
      } else {
        res[i][j] = this[rowsCount * (j + 1) - i - 1];
      }
    }
  }

  return res;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
