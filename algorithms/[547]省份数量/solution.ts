// topics = ["图", "深度优先搜索", "广度优先搜索", "并查集"]

// 已知无向图的邻接矩阵，求连通分量
function findCircleNum(isConnected: number[][]): number {
  // dfs
  const n = isConnected.length;
  const visited = new Set<number>();
  let res: number = 0;

  const dfs = function (i: number): void {
    visited.add(i);
    for (let j = 0; j < n; j += 1) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i += 1) {
    if (!visited.has(i)) {
      dfs(i);
      res += 1;
    }
  }

  return res;
}

function findCircleNum2(isConnected: number[][]): number {
  // bfs
  const n = isConnected.length;
  const visited = new Set<number>();
  let queue: number[] = [];
  let res: number = 0;

  for (let i = 0; i < n; i += 1) {
    if (visited.has(i)) continue;

    queue.push(i);
    while (queue.length) {
      const cur = queue.shift()!;
      visited.add(cur);
      for (let j = 0; j < n; j += 1) {
        if (isConnected[cur][j] === 1 && !visited.has(j)) {
          queue.push(j);
        }
      }
    }

    res += 1;
  }

  return res;
}

function findCircleNum3(isConnected: number[][]): number {
  // Union-Find
  const n = isConnected.length;
  const parent = Array.from({ length: n }, (_, i) => i);

  const union = function (i: number, j: number): void {
    parent[find(i)] = find(j);
  };

  const find = function (x: number): number {
    if (parent[x] === x) {
      return x;
    }

    // return find(parent[x]);

    // 优化(路径压缩)：把沿途的每个节点的父节点都设为根节点
    parent[x] = find(parent[x]);
    return parent[x];
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }

  return parent.filter((ele, index) => ele === index).length;
}

function findCircleNum4(isConnected: number[][]): number {
  // Union-Find & 按秩合并
  // 参考 https://zhuanlan.zhihu.com/p/93647900
  const n = isConnected.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array.from({ length: n }, () => 1);

  const union = function (i: number, j: number): void {
    const x = find(i);
    const y = find(j);

    if (rank[x] <= rank[y]) {
      parent[x] = y;
    } else {
      parent[y] = x;
    }

    if (rank[x] === rank[y] && x !== y) {
      rank[y] += 1;
    }
  };

  const find = function (x: number): number {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }

  return parent.filter((ele, index) => ele === index).length;
}
