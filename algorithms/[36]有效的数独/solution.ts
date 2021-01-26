function isValidSudoku(board: string[][]): boolean {
  let ch: string;

  for (let i = 0; i < 9; i += 1) {
    const rowNums: string[] = [];
    const colNums: string[] = [];
    const cubeNums: string[] = [];

    for (let j = 0; j < 9; j += 1) {
      ch = board[i][j];
      if (ch !== '.') {
        if (rowNums.indexOf(ch) > -1) return false;
        rowNums.push(ch);
      }

      ch = board[j][i];
      if (ch !== '.') {
        if (colNums.indexOf(ch) > -1) return false;
        colNums.push(ch);
      }

      let row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let col = i % 3 * 3 + j % 3;
      ch = board[row][col];
      if (ch !== '.') {
        if (cubeNums.indexOf(ch) > -1) return false;
        cubeNums.push(ch);
      }
    }
  }

  return true;
};