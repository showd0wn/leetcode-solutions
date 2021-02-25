// topics = ["数组"]

function transpose(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;

  const res: number[][] = Array.from({ length: n }, () => new Array(m));

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
}
