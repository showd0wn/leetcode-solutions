function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0]?.length ?? 0;
  
  // 利用排序矩阵的特性，选取左下为遍历起点
  let i = n - 1;
  let j = 0;
  while (i >= 0 && j < m) {
    const val = matrix[i][j];
    if (val === target) {
      return true;
    }
    if (val > target) {
      i -= 1;
    } else {
      j += 1;
    }
  }

  return false;
};
