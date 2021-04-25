// topics = ["回溯算法"]

/**
 * 回溯法搜索所有可行解模板
 * res = []
 * path = []
 *
 * def backtrack(未探索区域, res, path):
 *     if path 满足条件:
 *         res.add(path)  # 深度拷贝
 *         # return       # 如果不用继续搜索需要 return
 *     for 选择 in 未探索区域当前可能的选择:
 *         if 当前选择符合要求:
 *             path.add(当前选择)
 *             backtrack(新的未探索区域, res, path)
 *             path.pop()
 */

// 近似题 40.组合总和 II
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (idx = 1): void => {
    const sum = path.reduce((acc, cur) => acc + cur, 0);
    const len = path.length;
    if (sum == n && len == k) {
      res.push([...path]);
      return;
    }
    if (len == k) {
      return;
    }
    for (let i = idx; i < 10; i += 1) {
      if (sum + i > n) {
        return;
      }
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
