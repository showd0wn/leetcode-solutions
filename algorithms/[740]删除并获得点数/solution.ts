// topics = ["动态规划"]

/**
 * DP
 * time O(n + m), space O(m), n 为数组长度, m 为元素的最大值
 */
function deleteAndEarn(nums: number[]): number {
  const maxVal = Math.max(...nums);
  const sum = new Array<number>(maxVal + 1).fill(0);
  for (const num of nums) {
    sum[num] += num;
  }

  // 转换为「打家劫舍」问题
  return rob(sum);
}

function rob(nums: number[]): number {
  const n = nums.length;
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return nums[0];
  }

  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i += 1) {
    [first, second] = [second, Math.max(first + nums[i], second)];
  }

  return second;
}
