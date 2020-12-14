/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  if (board.length === 0) return [];
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      board[i][j] = helper(board, i, j);
    }
  }

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (board[i][j] === 2) {
        board[i][j] = 1;
      } else if (board[i][j] === -1) {
        board[i][j] = 0;
      }
    }
  }
};

const helper = function(board, i, j) {
  const ori = board[i][j];
  let count = [
    board[i - 1] && board[i - 1][j - 1],
    board[i - 1] && board[i - 1][j],
    board[i - 1] && board[i - 1][j + 1],
    board[i] && board[i][j - 1],
    board[i] && board[i][j + 1],
    board[i + 1] && board[i + 1][j - 1],
    board[i + 1] && board[i + 1][j],
    board[i + 1] && board[i + 1][j + 1],
  ].filter(Boolean).filter(v => v === 1 || v === -1).length;

  if (ori === 1 && ![2, 3].includes(count)) return -1;
  if (ori === 1 && [2, 3].includes(count)) return 1;
  if (ori === 0 && count !== 3) return 0;
  if (ori === 0 && count === 3) return 2;
}
