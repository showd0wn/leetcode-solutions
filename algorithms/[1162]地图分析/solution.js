/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function(grid) {
  const len = grid.length;
  let res = -1;
  
  // 广度优先搜索 BFS
  const bfs = function(x, y) {
    const visited = [];
    for (let i = 0; i < len; i++) {
      visited[i] = new Array(len).fill(0);
    }
    
    let queue = [{
      pos: [x, y],
      dis: 0,
    }];
    visited[x][y] = 1;
    
    while (queue.length !== 0) {
      const { pos, dis } = queue.shift();
      const [x, y] = pos;

      if (grid[x][y] === 1) {
        return dis;
      }

      if (x - 1 >= 0 && !visited[x - 1][y]) {
        queue.push({
          pos: [x - 1, y],
          dis: dis + 1,
        });
        visited[x - 1][y] = 1;
      }
      if (x + 1 < len && !visited[x + 1][y]) {
        queue.push({
          pos: [x + 1, y],
          dis: dis + 1,
        });
        visited[x + 1][y] = 1;
      }
      if (y - 1 >= 0 && !visited[x][y - 1]) {
        queue.push({
          pos: [x, y - 1],
          dis: dis + 1,
        });
        visited[x][y - 1] = 1;
      }
      if (y + 1 < len && !visited[x][y + 1]) {
        queue.push({
          pos: [x, y + 1],
          dis: dis + 1,
        });
        visited[x][y + 1] = 1;
      }
    }

    return -1;
  };

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (grid[i][j] === 0) {
        res = Math.max(res, bfs(i, j));
      }
    }
  }

  return res;
};
