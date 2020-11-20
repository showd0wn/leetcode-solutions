/**
 * @param {number[][]} M
 * @return {number}
 */
const findCircleNum = function(M) {
  const n = M.length;
  const visited = new Array(n).fill(0);
  let res = 0;

  // 深度优先搜索 DFS
  const dfs = function(i) {
    visited[i] = 1;
    for (let j = 0; j < n; j += 1) {
      if (M[i][j] === 1 && visited[j] === 0) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i += 1) {
    if (visited[i] === 0) {
      res += 1;
      dfs(i);
    }
  }

  return res;
};
