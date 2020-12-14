/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const res = new Array(n);
  res[0] = new Array(m).fill(1);

  for (let i = 1; i < n; i += 1) {
    res[i] = [];
    res[i][0] = 1;
    for (let j = 1; j < m; j += 1) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }

  return res[n - 1][m - 1];
};
