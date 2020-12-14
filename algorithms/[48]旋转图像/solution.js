/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    const n = matrix.length

    // 转置
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // 再翻转
    for (let i = 0; i < n; i += 1) {
        matrix[i].reverse()
    }
}
