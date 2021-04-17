// topics = ["树", "广度优先搜索"]

function findMinHeightTrees(n: number, edges: number[][]): number[] {
  // 邻接表
  const map = new Map<number, number[]>();
  // 记录剩余的顶点
  const set = new Set<number>(Array.from({ length: n }, (_, i) => i));
  // 记录各个顶点的度
  const deg = new Array<number>(n).fill(0);

  for (const [i, j] of edges) {
    deg[i] += 1;
    deg[j] += 1;
    if (!map.has(i)) {
      map.set(i, [j]);
    } else {
      map.get(i)!.push(j);
    }
    if (!map.has(j)) {
      map.set(j, [i]);
    } else {
      map.get(j)!.push(i);
    }
  }

  while (set.size > 2) {
    // 同时处理度为 1 的顶点
    const queue = deg.map((val, idx) => (val == 1 ? idx : -1)).filter(val => val != -1);
    for (const node of queue) {
      set.delete(node);
      deg[node] -= 1;
      for (const ele of map.get(node)!) {
        deg[ele] -= 1;
      }
    }
  }

  return [...set];
}
