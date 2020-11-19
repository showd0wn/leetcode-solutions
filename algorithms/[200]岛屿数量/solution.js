/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先搜索 dfs
const numIslands = function(grid) {
  if (!grid || !grid.length) return 0;
  const rLen = grid.length;
  const cLen = grid[0].length;

  let res = 0;
  for (let row = 0; row < rLen; row += 1) {
    for (let col = 0; col < cLen; col += 1) {
      if (grid[row][col] === '1') {
        res += 1;
        dfs(grid, row, col);
      }
    }
  }

  return res;
};

function dfs(grid, row, col) {
  const rLen = grid.length;
  const cLen = grid[0].length;

  grid[row][col] = '0';
  [
    [row - 1, col],
    [row, col + 1],
    [row + 1, col],
    [row, col - 1],
  ].forEach(([r, c]) => {
    if (0 <= r && r < rLen && 0 <= c && c < cLen && grid[r][c] === '1') {
      dfs(grid, r, c);
    }
  })
}
