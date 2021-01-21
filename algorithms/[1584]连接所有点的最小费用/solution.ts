// [顶点1索引, 顶点2索引, 权重]
export type edge = [number, number, number];

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

    if (this.rank[x] < this.rank[y]) {
      this.parent[x] = y;
    } else {
      this.parent[y] = x;
    }

    if (this.rank[x] === this.rank[y] && x !== y) {
      this.rank[y] += 1;
    }
  }
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
function minCostConnectPoints(points: number[][]): number {
  // 【最小生成树问题】 Kruskal 算法
  // 图解 https://blog.csdn.net/luoshixian099/article/details/51908175
  const n = points.length;
  const uf = new UnionFind(n);
  const edges: edge[] = [];

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      edges.push([i, j, Math.abs(x1 - x2) + Math.abs(y1 - y2)]);
    }
  }

  // 所有边按权重（曼哈顿距离）升序排列
  edges.sort((edge1, edge2) => edge1[2] - edge2[2]);

  // 记录构成最小生成树的每条边的权重（曼哈顿距离）
  const res: number[] = [];

  while (res.length < n - 1) {
    const [x, y, w] = edges.shift()!;
    if (uf.find(x) !== uf.find(y)) {
      uf.union(x, y);
      res.push(w);
    }
  }

  return res.reduce((acc, cur) => acc + cur, 0);
};
