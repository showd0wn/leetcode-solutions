// topics = ["图", "并查集"]

export class UnionFind {
  parent: number[];
  rank: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, () => 1);
  }
  union(i: number, j: number): void {
    const x = this.find(i);
    const y = this.find(j);

    if (this.rank[x] <= this.rank[y]) {
      this.parent[x] = y;
    } else {
      this.parent[y] = x;
    }

    if (this.rank[x] == this.rank[y] && x != y) {
      this.rank[y] += 1;
    }
  }
  find(x: number): number {
    if (this.parent[x] != x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}

// 同 1631.最小体力消耗路径
function swimInWater(grid: number[][]): number {
  const n = grid.length;
  const edges: number[][] = [];

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const start = i * n + j;
      if (i + 1 < n) {
        const end = (i + 1) * n + j;
        const value = Math.max(grid[i][j], grid[i + 1][j]);
        edges.push([start, end, value]);
      }
      if (j + 1 < n) {
        const end = i * n + j + 1;
        const value = Math.max(grid[i][j], grid[i][j + 1]);
        edges.push([start, end, value]);
      }
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n * n);
  for (const [i, j, v] of edges) {
    uf.union(i, j);
    if (uf.find(0) == uf.find(n * n - 1)) {
      return v;
    }
  }

  return 0;
}
