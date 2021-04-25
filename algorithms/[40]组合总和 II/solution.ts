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

// 近似题 39.组合总和
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const n = candidates.length;
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (idx = 0): void => {
    const sum = path.reduce((acc, cur) => acc + cur, 0);
    if (sum == target) {
      res.push([...path]);
      return;
    }
    for (let i = idx; i < n; i += 1) {
      if (sum + candidates[i] > target) return;
      // 【重要】保证不重复，需要先排序！
      if (i > idx && candidates[i] == candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
