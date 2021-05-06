// topics = ["图", "并查集"]

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
      this.rank[y] + 1;
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

/**
 * 并查集求连通分量
 * time O(m·α(n)), space O(n), m 为 connections 的长度, α 是阿克曼函数的反函数
 */
function makeConnected(n: number, connections: number[][]): number {
  const len = connections.length;

  // 当计算机的数量为 n 时，至少需要 n-1 根线才能将它们进行连接
  if (len < n - 1) return -1;

  // 已知边集合，求连通分量 k
  // 移动 k - 1 根线即可将所有计算机连接
  const uf = new UnionFind(n);
  connections.forEach(([i, j]) => uf.union(i, j));
  return uf.setCount - 1;
}
