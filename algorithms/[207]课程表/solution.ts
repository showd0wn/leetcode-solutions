// topics = ["图", "拓扑排序", "深度优先搜索"]

// DFS 实现
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 邻接表
  const edges = new Map<number, number[]>();
  // 所有顶点的状态（0=未搜索, 1=搜索中, 2=已搜索）
  const visited = new Array<number>(numCourses).fill(0);
  // 栈用于记录已搜索的节点
  const stack: number[] = [];
  // 判断有向图中是否无环
  let valid = true;

  for (const [i, j] of prerequisites) {
    if (!edges.has(j)) {
      edges.set(j, [i]);
    } else {
      edges.get(j)!.push(i);
    }
  }

  const dfs = (x: number): void => {
    visited[x] = 1;
    for (const v of edges.get(x) ?? []) {
      if (visited[v] == 0) {
        dfs(v);
        if (!valid) return;
      } else if (visited[v] == 1) {
        // 找到了环
        valid = false;
        return;
      }
    }
    // 回溯的时候依次标记为已搜索，并加入栈
    visited[x] = 2;
    stack.push(x);
  };

  for (let i = 0; i < numCourses; i += 1) {
    if (valid && !visited[i]) {
      dfs(i);
    }
  }

  return valid;
}
