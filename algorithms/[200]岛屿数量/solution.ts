// topjcs = ["并查集"]

export class UnionFind {
  parent: number[];
  rank: number[];
  setCount: number;
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, () => 1);
    this.setCount = n;
  }
  union(i: number, j: number): void {
    const x = this.find(i);
    const y = this.find(j);

    if (x == y) {
      return;
    }

    if (this.rank[x] <= this.rank[y]) {
      this.parent[x] = y;
    } else {
      this.parent[y] = x;
    }

    if (this.rank[x] == this.rank[y]) {
      this.rank[y] += 1;
    }

    this.setCount -= 1;
  }
  find(x: number): number {
    if (this.parent[x] != x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}

function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const uf = new UnionFind(m * n);
  let waterCount = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] == '0') {
        waterCount += 1;
      }
      if (grid[i][j] == '1') {
        if (grid[i - 1]?.[j] == '1') {
          uf.union(i * n + j, (i - 1) * n + j);
        }
        if (grid[i]?.[j - 1] == '1') {
          uf.union(i * n + j, i * n + j - 1);
        }
      }
    }
  }

  return uf.setCount - waterCount;
}
