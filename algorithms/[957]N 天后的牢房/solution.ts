// topics = ["哈希表"]

function prisonAfterNDays(cells: number[], n: number): number[] {
  const m = cells.length;
  const dp: number[][] = [];

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
