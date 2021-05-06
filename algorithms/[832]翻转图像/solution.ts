// topics = ["数组"]

/**
 * Iterate
 * time O(n^2), space O(1), n 为矩阵长度
 */
function flipAndInvertImage(A: number[][]): number[][] {
  const n = A.length;
  const m = A[0].length;

  for (let i = 0; i < n; i += 1) {
    A[i].reverse();
    for (let j = 0; j < m; j += 1) {
      A[i][j] = 1 - A[i][j];
      // A[i][j] ^= 1;
    }
  }

  return A;
}
