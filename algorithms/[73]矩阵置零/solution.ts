// topics = ["数组"]

// space O(1)
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  // 第一列是否包含 0
  let flagCol0 = false;
  // 第二列是否包含 0
  let flagRow0 = false;

  for (let i = 0; i < m; i += 1) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
      break;
    }
  }

  for (let j = 0; j < n; j += 1) {
    if (matrix[0][j] === 0) {
      flagRow0 = true;
      break;
    }
  }

  // 用矩阵的第一行、第一列作为标记数组
  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (flagCol0) {
    for (let i = 0; i < m; i += 1) {
      matrix[i][0] = 0;
    }
  }

  if (flagRow0) {
    for (let j = 0; j < n; j += 1) {
      matrix[0][j] = 0;
    }
  }
}
