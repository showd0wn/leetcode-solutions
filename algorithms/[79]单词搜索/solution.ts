// topics = ["深度优先搜索", "回溯算法"]

function exist(board: string[][], word: string): boolean {
  const n = board.length;
  const m = board[0].length;
  const visited: boolean[][] = Array.from({ length: n }, () => new Array(m).fill(false));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      // 深度优先搜索
      if (dfs(0, i, j, word, board, visited)) {
        return true;
      }
    }
  }

  return false;
}

function dfs(k: number, i: number, j: number, word: string, board: string[][], visited: boolean[][]): boolean {
  if (word[k] != board[i][j]) {
    return false;
  }
  if (k == word.length - 1) {
    return true;
  }

  // 标记已访问
  visited[i][j] = true;

  let result = false;
  const next = [
    [i - 1, j],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j],
  ];
  for (const [ni, nj] of next) {
    if (visited[ni]?.[nj] === false) {
      if (dfs(k + 1, ni, nj, word, board, visited)) {
        result = true;
        break;
      }
    }
  }

  // 标记未访问
  visited[i][j] = false;

  return result;
}
