export class UnionFind {
  parent: number[];
  rank: number[];
  setCount: number;
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array.from({ length: n }, (_, i) => 1);
    this.setCount = n;
  }
  union(i: number, j: number): void {
    const x = this.find(i);
    const y = this.find(j);
    
    if (x === y) return;
    
    if (this.rank[x] <= this.rank[y]) {
      this.parent[x] = y;
    } else {
      this.parent[y] = x;
    }

    if (this.rank[x] === this.rank[y]) {
      this.rank[y] += 1;
    }

    this.setCount -= 1;
  }
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}

// 并查集求连通分量
function regionsBySlashes(grid: string[]): number {
  const n = grid.length;
  // 把一个单元格分割成逻辑上的左右 2 个部分
  const uf = new UnionFind(n ** 2 * 2);
  
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const char = grid[i][j];
      const idx = 2 * (i * n + j);
      if (char === ' ') {
        uf.union(idx, idx + 1);
      }
      // 搜索右
      if (j + 1 < n) {
        uf.union(idx + 1, idx + 2);
      }
      // 搜索下
      if (i + 1 < n) {
        const anotherChar = grid[i + 1][j];
        if (char === '/') {
          if (anotherChar === '\\') {
            uf.union(idx + 1, idx + 2 * n + 1);
          } else {
            uf.union(idx + 1, idx + 2 * n);
          }
        } else {
          if (anotherChar === '\\') {
            uf.union(idx, idx + 2 * n + 1);
          } else {
            uf.union(idx, idx + 2 * n);
          }
        }
      }
    }
  }

  return uf.setCount;
};
