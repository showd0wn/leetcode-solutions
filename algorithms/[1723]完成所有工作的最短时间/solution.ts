// topics = ["回溯算法", "动态规划"]

/**
 * 回溯算法（TLE）
 * time O(k^n), space O(k), n 为 jobs 长度
 */
function minimumTimeRequired(jobs: number[], k: number): number {
  const n = jobs.length;
  const path = new Array<number>(k).fill(0);
  let res = Number.MAX_SAFE_INTEGER;

  const backtrack = (s = 0) => {
    if (s == n) {
      res = Math.min(res, Math.max(...path));
      return;
    }

    for (let i = 0; i < k; i += 1) {
      path[i] += jobs[s];
      backtrack(s + 1);
      path[i] -= jobs[s];
    }
  };

  backtrack();

  return res;
}

/**
 * 回溯算法 & 优化
 * time O(k^n), space O(k), n 为 jobs 长度
 */
function minimumTimeRequired2(jobs: number[], k: number): number {
  const n = jobs.length;
  const path = new Array<number>(k).fill(0);
  let res = Number.MAX_SAFE_INTEGER;

  // uesd 表示当前已分配的工人数量
  const backtrack = (s = 0, uesd = 0, max = 0): void => {
    // 减枝
    if (max > res) {
      return;
    }

    if (s == n) {
      res = max;
      return;
    }

    // 调整搜索顺序, 优先分配给「空闲工人」
    if (uesd < k) {
      path[uesd] = jobs[s];
      backtrack(s + 1, uesd + 1, Math.max(max, path[uesd]));
      path[uesd] = 0;
    }

    for (let i = 0; i < uesd; i += 1) {
      path[i] += jobs[s];
      backtrack(s + 1, uesd, Math.max(max, path[i]));
      path[i] -= jobs[s];
    }
  };

  backtrack();

  return res;
}

/**
 * 动态规划 & 状态压缩
 * time O(k * 3^n), space O(n * 2^n), n 为 jobs 长度
 */
function minimumTimeRequired3(jobs: number[], k: number): number {
  const n = jobs.length;

  // sum[i] 表示完成子集 i 的最短时间
  const sum = new Array<number>(1 << n).fill(0);
  for (let i = 1; i < 1 << n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if ((i & (1 << j)) == 0) continue;
      const left = i - (1 << j);
      sum[i] = sum[left] + jobs[j];
      break;
    }
  }

  // dp[i][j] 表示前 i 个工人完成作业子集 j 对应的最短工作时间
  const dp = new Array(k).fill(0).map(() => new Array<number>(1 << n).fill(0));
  for (let i = 0; i < 1 << n; i += 1) {
    dp[0][i] = sum[i];
  }

  for (let i = 1; i < k; i += 1) {
    for (let j = 0; j < 1 << n; j += 1) {
      let mint = Number.MAX_VALUE;
      for (let x = j; x != 0; x = (x - 1) & j) {
        mint = Math.min(mint, Math.max(dp[i - 1][j - x], sum[x]));
      }
      dp[i][j] = mint;
    }
  }
  return dp[k - 1][(1 << n) - 1];
}
