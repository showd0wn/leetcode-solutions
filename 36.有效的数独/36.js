/**
 * @param {character[][]} board
 * @return {boolean}
 */

// eslint-disable-next-line no-unused-vars
const isValidSudoku = function(board) {
    let ch;

    for (let i = 0; i < 9; i++) {
        const rowNums = []
        const colNums = []
        const cubeNums = []

        for (let j = 0; j < 9; j++) {
            ch = board[i][j]
            if (ch !== '.') {
                if (rowNums.includes(ch)) return false
                rowNums.push(ch)
            }

            ch = board[j][i]
            if (ch !== '.') {
                if (colNums.includes(ch)) return false
                colNums.push(ch)
            }

            const row = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            const col = (i % 3) * 3 + (j % 3)
            ch = board[row][col]
            if (ch !== '.') {
                if (cubeNums.includes(ch)) return false
                cubeNums.push(ch)
            }
        }
    }

    return true
}
