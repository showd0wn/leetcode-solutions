// topics = ["数组"]

function gameOfLife(board: number[][]): void {
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
      } else if (board[i][j] === 3) {
        board[i][j] = 0;
      }
    }
  }
}

function helper(board: number[][], i: number, j: number): number {
  const ori = board[i][j];
  const count = [
    board[i - 1]?.[j - 1],
    board[i - 1]?.[j],
    board[i - 1]?.[j + 1],
    board[i][j - 1],
    board[i][j + 1],
    board[i + 1]?.[j - 1],
    board[i + 1]?.[j],
    board[i + 1]?.[j + 1],
  ].filter(v => v == 1 || v == 3).length;

  if (ori == 0 && count == 3) return 2;
  if (ori == 1 && count != 2 && count != 3) return 3;
  return ori;
}
