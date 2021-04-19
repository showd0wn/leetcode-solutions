// topics = ["深度优先搜索"]

function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  // 记录每个顶点所在子集（1 或者 2）, 初始时为 0
  const id = new Array<number>(n).fill(0);

  let res = true;

  const dfs = (node: number, s = 1): void => {
    id[node] = s;
    const next = s == 1 ? 2 : 1;
    for (const neighbor of graph[node]) {
      if (id[neighbor] == 0) {
        dfs(neighbor, next);
        if (!res) {
          return;
        }
      } else if (id[neighbor] != next) {
        res = false;
        return;
      }
    }
  };

  for (let i = 0; i < n; i += 1) {
    if (id[i] == 0) {
      dfs(i);
      if (!res) {
        break;
      }
    }
  }

  return res;
}

function isBipartite2(graph: number[][]): boolean {
  const n = graph.length;
  // 记录每个顶点所在子集（1 或者 2）, 初始时为 0
  const id = new Array<number>(n).fill(0);

  const dfs = (node: number, s = 1): boolean => {
    id[node] = s;
    const next = s == 1 ? 2 : 1;
    for (const neighbor of graph[node]) {
      if (id[neighbor] == 0 && !dfs(neighbor, next)) {
        return false;
      } else if (id[neighbor] != next) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < n; i += 1) {
    if (id[i] == 0 && !dfs(i)) {
      return false;
    }
  }

  return true;
}
