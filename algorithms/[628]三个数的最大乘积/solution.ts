// topics = ["数学"]

function maximumProduct(nums: number[]): number {
  // 若数组中的数皆同符号，最大乘积即最大三个数乘积
  // 若数组中的数不同符号，最大乘积为最大三个正数乘积，或最小两个负数和最大正数乘积
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 3] * nums[n - 2] * nums[n - 1]);
}
