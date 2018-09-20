/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstRowZero = false, firstColZero = false
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && i && j) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      } else if (matrix[i][j] === 0) {
        firstRowZero = i === 0 ? true : firstRowZero
        firstColZero = j === 0 ? true : firstColZero
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) matrix[i][j] = 0
    }
  }
  for (let i = 0; firstColZero && i < matrix.length; i++) {
    matrix[i][0] = 0
  }
  for (let j = 0; firstRowZero && j < matrix[0].length; j++) {
    matrix[0][j] = 0
  }
}
