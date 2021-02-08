function isValidSudoku(board: string[][]): boolean {
  let ch: string;

  for (let i = 0; i < 9; i += 1) {
    const rowNums: Set<string> = new Set();
    const colNums: Set<string> = new Set();
    const cubeNums: Set<string> = new Set();

    for (let j = 0; j < 9; j += 1) {
      ch = board[i][j];
      if (ch !== '.') {
        if (rowNums.has(ch)) return false;
        rowNums.add(ch);
      }

      ch = board[j][i];
      if (ch !== '.') {
        if (colNums.has(ch)) return false;
        colNums.add(ch);
      }

      let row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let col = (i % 3) * 3 + (j % 3);
      ch = board[row][col];
      if (ch !== '.') {
        if (cubeNums.has(ch)) return false;
        cubeNums.add(ch);
      }
    }
  }

  return true;
}
