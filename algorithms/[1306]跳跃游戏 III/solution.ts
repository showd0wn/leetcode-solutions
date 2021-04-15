// topics = ["深度优先遍历"]

function canReach(arr: number[], start: number): boolean {
  const n = arr.length;
  const visited = new Set<number>();

  const dfs = (i: number) => {
    visited.add(i);

    const pre = i - arr[i];
    const next = i + arr[i];

    if (!visited.has(pre) && 0 <= pre && pre < n) {
      dfs(pre);
    }

    if (!visited.has(next) && 0 <= next && next < n) {
      dfs(next);
    }
  };

  dfs(start);

  return [...visited].map(i => arr[i]).includes(0);
}
