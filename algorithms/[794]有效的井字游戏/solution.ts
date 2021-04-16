// topics = ["数学"]

function validTicTacToe(board: string[]): boolean {
  const xWin = win(board, 'X');
  const oWin = win(board, 'O');

  let xNums = 0;
  let oNums = 0;
  board
    .join('')
    .split('')
    .forEach(v => {
      if (v == 'X') {
        xNums += 1;
      } else if (v == 'O') {
        oNums += 1;
      }
    });

  return (!oWin && xNums - oNums == 1) || (!xWin && xNums == oNums);
}

function win(board: string[], s: string): boolean {
  for (let i = 0; i < 3; i += 1) {
    if (board[0][i] === s && board[1][i] === s && board[2][i] === s) {
      return true;
    }
    if (board[i][0] === s && board[i][1] === s && board[i][2] === s) {
      return true;
    }
  }

  if (board[0][0] === s && board[1][1] === s && board[2][2] === s) {
    return true;
  }

  if (board[2][0] === s && board[1][1] === s && board[0][2] === s) {
    return true;
  }

  return false;
}
