/**
 * @param {number[][]} M
 * @return {number}
 */
const longestLine = function(M) {
  if (!M || !M.length) return 0;
  const rlen = M.length;
  const clen = M[0].length;
  let res = 0;
  
  const dfs = function(i, j, direction, count) {
    if (!M[i] || M[i][j] !== 1) {
      res = Math.max(res, count);
      return;
    }
    switch (direction) {
      case 'down':
        dfs(i + 1, j, 'down', count + 1);
        break;
      case 'leftdown':
        dfs(i + 1, j - 1, 'leftdown', count + 1);
        break;
      case 'rightdown':
        dfs(i + 1, j + 1, 'rightdown', count + 1);
        break;
      case 'right':
        dfs(i, j + 1, 'right', count + 1);
        break;
      default:
        break;
    }

  };

  for (let i = 0; i < rlen; i += 1) {
    for (let j = 0; j < clen; j += 1) {
      if (M[i][j] === 0) continue;
      dfs(i + 1, j, 'down', 1);
      dfs(i + 1, j - 1, 'leftdown', 1);
      dfs(i + 1, j + 1, 'rightdown', 1);
      dfs(i, j + 1, 'right', 1);
    }
  }

  return res;
};
