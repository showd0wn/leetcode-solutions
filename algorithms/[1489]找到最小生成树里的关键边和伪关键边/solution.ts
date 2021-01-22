export class UnionFind {
  length: number;
  parent: number[];
  rank: number[];
  constructor(n: number) {
    this.length = n;
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
  reset() {
    this.parent = Array.from({ length: this.length }, (_, i) => i);
    this.rank = Array.from({ length: this.length }, () => 1);
  }
}


function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  // Kruskal 算法求最小生成树的关键边和伪关键边
  // 参考 https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solution/python3-kruskalbing-cha-ji-by-smiletm-jt9y/

  // 在原有的 edge 中添加索引，方便排序后能得到在原 edges 中的位置
  for (const [i, edge] of edges.entries()) {
    edge.push(i);
  }

  // 实例化并查集
  const m = edges.length;
  const uf = new UnionFind(m);

  // 所有边按权重升序排序
  edges.sort((a, b) => a[2] - b[2]);

  // 求最小生成树权重和 total
  let total = 0;
  for (const [x, y, w, _] of edges.values()) {
    if (uf.find(x) !== uf.find(y)) {
      uf.union(x, y);
      total += w;
    }
  }

  // 关键边列表
  const keyEdges:number[] = [];
  // 非关键边列表
  const nonKeyEdges: number[] = [];

  for (const [ci, [cx, cy, cw, coi]] of edges.entries()) {
    // 求以当前边为第一连通边, 得到的所有连通边的权值和 total1
    uf.reset();
    uf.union(cx, cy);
    let total1 = cw;
    for (const [i, [x, y, w, _]] of edges.entries()) {
      if (ci === i) continue;
      if (uf.find(x) !== uf.find(y)) {
        uf.union(x, y);
        total1 += w;
      }
    }

    // 只判断有效边
    if (total === total1) {
      // 求排除当前边，得到的所有连通边的权值和 total2
      uf.reset();
      let total2 = 0;
      for (const [i, [x, y, w, _]] of edges.entries()) {
        if (ci === i) continue;
        if (uf.find(x) !== uf.find(y)) {
          uf.union(x, y);
          total2 += w;
        }
      }

      if (total1 === total2) {
        // 该边为非关键边
        nonKeyEdges.push(coi);
      } else {
        // 该边为关键边
        keyEdges.push(coi);
      }
    }
  }

  return [keyEdges, nonKeyEdges];
};
