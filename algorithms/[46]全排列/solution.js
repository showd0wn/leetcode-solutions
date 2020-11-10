/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  if (!nums || !nums.length) return [];
  const len = nums.length;
  const dp = [];

  dp[0] = [[nums[0]]];
  for (let i = 1; i < len; i += 1) {
    dp[i] = [];
    dp[i - 1].forEach(arr => {
      for (let j = 0; j <= arr.length; j += 1) {
        dp[i].push([...arr.slice(0, j), nums[i], ...arr.slice(j)]);
      }
    });
  }

  return dp[len - 1];
};

// backtrack
const permute2 = function(nums) {
  const len = nums.length;
  const res = [];
  const backtrack = function(f = 0) {
    if (f === len) {
      res.push([...nums]);
      return;
    }
    for (let i = f; i < len; i += 1) {
      [nums[f], nums[i]] = [nums[i], nums[f]];
      backtrack(f + 1);
      [nums[f], nums[i]] = [nums[i], nums[f]];
    }
  };

  backtrack();
  return res;
}
