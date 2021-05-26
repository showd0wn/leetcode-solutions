// topics = ["数组"]

/**
 * 二维异或前缀和 & 排序
 * time O(mnlog(mn)), space O(mn), m 和 n 分别为二维数组的行、列数
 */
function kthLargestValue(matrix: number[][], k: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const preXor = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  const res = [];

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      preXor[i][j] = preXor[i - 1][j] ^ preXor[i][j - 1] ^ preXor[i - 1][j - 1] ^ matrix[i - 1][j - 1];
      res.push(preXor[i][j]);
    }
  }

  res.sort((a, b) => b - a);

  return res[k - 1];
}
