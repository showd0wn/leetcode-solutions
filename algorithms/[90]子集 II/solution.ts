// topics = ["数组", "回溯算法"]

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (idx = 0): void => {
    res.push([...path]);

    for (let i = idx; i < n; i += 1) {
      // 过滤掉重复子集
      if (i > idx && nums[i] == nums[i - 1]) continue;
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
