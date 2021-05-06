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

/**
 * Union Find
 * time O(mnlog(mn)), space O(mn), m 和 n 分别是图的行数和列数
 */
function minimumEffortPath(heights: number[][]): number {
  const row = heights.length;
  const col = heights[0].length;
  const edges: number[][] = [];

  // 求边的集合
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      const from = i * col + j;
      if (i + 1 < row) {
        const to = (i + 1) * col + j;
        const height = Math.abs(heights[i + 1][j] - heights[i][j]);
        edges.push([from, to, height]);
      }
      if (j + 1 < col) {
        const to = i * col + j + 1;
        const height = Math.abs(heights[i][j + 1] - heights[i][j]);
        edges.push([from, to, height]);
      }
    }
  }

  // 按 height 升序排序
  edges.sort((p1, p2) => p1[2] - p2[2]);

  const uf = new UnionFind(row * col);
  const start = 0;
  const end = row * col - 1;
  // 类似 Kruskal 算法构建最小生成树
  for (const [from, to, height] of edges) {
    uf.union(from, to);
    if (uf.find(start) == uf.find(end)) {
      return height;
    }
  }

  // 没有边的情况，即只有一个顶点
  return 0;
}
