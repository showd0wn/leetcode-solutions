// topics = ["数组", "回溯算法"]

// 回溯法搜索所有可行解模板 https://leetcode-cn.com/problems/subsets-ii/solution/hui-su-fa-mo-ban-tao-lu-jian-hua-xie-fa-y4evs/
function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (idx: number = 0): void => {
    res.push([...path]);
    for (let i = idx; i < n; i += 1) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
