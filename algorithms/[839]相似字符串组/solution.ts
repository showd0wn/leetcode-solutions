// topics = ["并查集"]

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

/**
 * Union Find
 * time O(n^2·m + nlogn)), space O(n), n 为字符串的数量, m 为单个字符串的长度
 */
function numSimilarGroups(strs: string[]): number {
  const n = strs.length;
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (isSimilar(strs[i], strs[j])) {
        uf.union(i, j);
      }
    }
  }

  return uf.setCount;
}

function isSimilar(str1: string, str2: string): boolean {
  if (str1 == str2) {
    return true;
  }
  if (str1.length != str2.length) {
    return false;
  }
  const n = str1.length;
  const tmp: number[] = [];

  for (let i = 0; i < n; i += 1) {
    if (str1[i] != str2[i]) {
      tmp.push(i);
    }
  }

  if (tmp.length != 2) {
    return false;
  }

  return str1[tmp[0]] === str2[tmp[1]] && str1[tmp[1]] === str2[tmp[0]];
}
