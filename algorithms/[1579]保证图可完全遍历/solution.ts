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


function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  let result = 0;

  const ufa = new UnionFind(n);
  const ufb = new UnionFind(n);

  // 节点编号改为从 0 开始
  for (let edge of edges) {
    edge[1] -= 1;
    edge[2] -= 1;
  }

  // 处理公共边
  for (const [type, i, j] of edges) {
    if (type !== 3) continue;
    if (ufa.find(i) === ufa.find(j)) {
      result += 1;
    } else {
      ufa.union(i, j);
      ufb.union(i, j);
    }
  }

  // 处理独占边
  for (const [type, i, j] of edges) {
    if (type === 1) {
      if (ufa.find(i) === ufa.find(j)) {
        result += 1;
      } else {
        ufa.union(i, j);
      }
    } else if (type === 2) {
      if (ufb.find(i) === ufb.find(j)) {
        result += 1;
      } else {
        ufb.union(i, j);
      }
    } else {}
  }

  // 联通分量不为 1，即无法遍历
  if (ufa.setCount !== 1 || ufb.setCount !== 1) {
    return -1;
  }

  return result;
};
