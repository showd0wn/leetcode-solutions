/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 先按主对角线翻转（左上-右下）
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 再按行翻转
  for (let i = 0; i < n; i += 1) {
    matrix[i].reverse();
  }
};