/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  // 从左下开始搜索
  let [i, j] = [m - 1, 0];
  while (i >= 0 && j < n) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) {
      i -= 1;
    } else {
      j += 1;
    }
  }

  return false;
};
