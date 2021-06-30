// topics = ["广度优先搜索"]

/**
 * BFS
 * time O(n^2), space O(n^2), n 为 board 边长
 */
function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const end = n * n;

  const vis = new Set<number>();
  const q: number[] = [];
  vis.add(1);
  q.push(1);

  let res = 0;

  const getPos = (idx: number): [number, number] => {
    const r = Math.floor((idx - 1) / n);
    let c = (idx - 1) % n;
    if (r % 2 == 1) {
      c = n - 1 - c;
    }
    return [n - 1 - r, c];
  };

  while (q.length) {
    for (let i = 0, len = q.length; i < len; i += 1) {
      const idx = q.shift()!;
      if (idx == end) {
        return res;
      }

      for (let step = 1; step < 7; step += 1) {
        const cur = idx + step;
        if (!vis.has(cur) && cur <= end) {
          vis.add(cur);
          const [x, y] = getPos(cur);
          const next = board[x][y];
          if (next == -1) {
            q.push(cur);
          } else if (!vis.has(next)) {
            q.push(next);
          }
        }
      }
    }
    res += 1;
  }

  return -1;
}
