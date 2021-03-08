// topics = ["回溯算法", "动态规划"]

function partition(s: string): string[][] {
  const n = s.length;
  const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = i + 1; j < n; j += 1) {
      dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
    }
  }

  const res: string[][] = [];
  const ans: string[] = [];

  const backtrack = (i: number): void => {
    if (i == n) {
      res.push([...ans]);
      return;
    }

    for (let j = i; j < n; j += 1) {
      if (dp[i][j]) {
        ans.push(s.slice(i, j + 1));
        backtrack(j + 1);
        ans.pop();
      }
    }
  };

  backtrack(0);

  return res;
}
