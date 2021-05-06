// topics = ["哈希表"]

/**
 * Iterate
 * time O(2^N), space O(2^N * N), N 为监狱房间的个数
 */
function prisonAfterNDays(cells: number[], n: number): number[] {
  const m = cells.length;
  const dp: number[][] = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const last = dp.length ? dp[dp.length - 1] : cells;
    const next = [...cells];
    for (let i = 0; i < m; i += 1) {
      if (i == 0 || i == m - 1) {
        next[i] = 0;
      } else if ((last[i - 1] ^ last[i + 1]) == 0) {
        next[i] = 1;
      } else {
        next[i] = 0;
      }
    }
    if (dp.length && next.join('') == dp[0].join('')) {
      break;
    }
    dp.push(next);
  }

  const loop = dp.length;
  return dp[(n % loop || loop) - 1];
}
