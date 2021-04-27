// topics = ["动态规划"]

// 暴力深搜，超时
function maxEnvelopes(envelopes: number[][]): number {
  const map = new Map<number, number[]>();
  envelopes.forEach(([w1, h1], i) => {
    map.set(i, []);
    envelopes.forEach(([w2, h2], j) => {
      if (w2 > w1 && h2 > h1) {
        map.get(i)!.push(j);
      }
    });
  });

  let res = 0;

  const dfs = (i: number, size = 1): void => {
    const larger = map.get(i)!;

    if (larger.length == 0) {
      res = Math.max(res, size);
      return;
    }

    larger.forEach(item => dfs(item, size + 1));
  };

  envelopes.forEach((_, id) => dfs(id));

  return res;
}

// 动态规划
function maxEnvelopes2(envelopes: number[][]): number {
  // 先按 w 升序，再按 h 降序
  envelopes.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));

  // 忽略 w 维度，只看 h 维度，转换为求最长递增子序列问题
  const n = envelopes.length;
  const dp = new Array<number>(n).fill(1);

  for (let i = 1; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
