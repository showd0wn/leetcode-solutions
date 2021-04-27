// topics = ["数组", "动态规划"]

// 朴素动态规划
function getRow1(rowIndex: number): number[] {
  const dp: number[][] = Array.from({ length: rowIndex + 1 }, () => []);
  dp[0] = [1];
  dp[1] = [1, 1];
  for (let i = 2; i <= rowIndex; i += 1) {
    dp[i][0] = 1;
    dp[i][i] = 1;
    for (let j = 1; j < i; j += 1) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp[rowIndex];
}

// 对第 i+1 行的计算仅用到了第 i 行的数据，可以利用滚动数组技巧，优化空间复杂度
function getRow2(rowIndex: number): number[] {
  let pre: number[] = [];
  let cur: number[] = [];
  for (let i = 0; i <= rowIndex; i += 1) {
    cur = new Array<number>(i + 1).fill(1);
    for (let j = 1; j < i; j += 1) {
      cur[j] = pre[j - 1] + pre[j];
    }
    pre = cur;
  }
  return cur;
}

// 进一步优化：从右向左遍历，仅用一个长度为 k 的一维数组
function getRow3(rowIndex: number): number[] {
  const res = new Array<number>(rowIndex + 1).fill(0);
  res[0] = 1;
  for (let i = 0; i <= rowIndex; i += 1) {
    for (let j = i; j >= 1; j -= 1) {
      res[j] += res[j - 1];
    }
  }
  return res;
}
