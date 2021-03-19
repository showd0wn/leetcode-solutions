// topics = ["深度优先搜索"]

// 递归实现
function maxAreaOfIsland(grid: number[][]): number {
  if (!grid.length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from({ length: m }, () => new Array<boolean>(n).fill(false));
  let res = 0;

  const dfs = (x: number, y: number): number => {
    visited[x][y] = true;
    let area = 1;

    for (const [dx, dy] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) {
      const nx = x + dx;
      const ny = y + dy;
      if (grid[nx]?.[ny] && !visited[nx][ny]) {
        area += dfs(nx, ny);
      }
    }

    return area;
  };

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] && !visited[i][j]) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }

  return res;
}

// 栈实现
function maxAreaOfIsland2(grid: number[][]): number {
  if (!grid.length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from({ length: m }, () => new Array<boolean>(n).fill(false));
  const stack: [number, number][] = [];
  let res = 0;

  const dfs = (i: number, j: number): number => {
    stack.push([i, j]);
    visited[i][j] = true;
    let area = 0;

    while (stack.length) {
      const [x, y] = stack.pop()!;
      area += 1;
      for (const [dx, dy] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) {
        const nx = x + dx;
        const ny = y + dy;
        if (grid[nx]?.[ny] && !visited[nx][ny]) {
          stack.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }

    return area;
  };

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] && !visited[i][j]) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }

  return res;
}
