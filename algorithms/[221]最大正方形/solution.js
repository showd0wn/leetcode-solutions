/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
  if (!matrix || !matrix.length) return 0;
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  let maxSide = 0;
  for (let i = 0; i < rowLen; i += 1) {
    for (let j = 0; j < colLen; j += 1) {
      if (matrix[i][j] === '1') {
        let k = 1;
        while (i + k < rowLen && j + k < colLen) {
          let flag = true;

          if (matrix[i + k][j + k] === '0') break;

          for (let m = 0; m < k; m += 1) {
            if (matrix[i + k][j + m] === '0') {
              flag = false;
              break;
            }
          }
          for (let n = 0; n < k; n += 1) {
            if (matrix[i + n][j + k] === '0') {
              flag = false;
              break;
            }
          }

          if (!flag) break;

          k += 1;
        }
        maxSide = Math.max(maxSide, k);
      }
    }
  }

  return maxSide * maxSide;
};


// dp
const maximalSquare2 = function(matrix) {
  if (!matrix || !matrix.length) return 0;
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  const dp = [];
  for (let i = 0; i < rowLen; i += 1) {
    dp[i] = [];
    for (let j = 0; j < colLen; j += 1) {
      if (matrix[i][j] === '0') {
        dp[i][j] = 0;
      } else if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
      }
    }
  }

  const maxSide = Math.max(...dp.map(arr => Math.max(...arr)));
  return maxSide * maxSide;
};
