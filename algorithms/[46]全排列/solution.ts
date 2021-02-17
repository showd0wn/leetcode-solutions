// topics = ["回溯法"]

function permute(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];

  // 如果给定的数字中存在重复，则考虑剪枝
  // 参考 ”剑指 Offer 38. 字符串的排列“
  const backtrack = (x: number = 0): void => {
    if (x == n) {
      res.push([...nums]);
      return;
    }

    for (let i = x; i < n; i += 1) {
      [nums[x], nums[i]] = [nums[i], nums[x]];
      backtrack(x + 1);
      [nums[x], nums[i]] = [nums[i], nums[x]];
    }
  };

  backtrack();

  return res;
}
