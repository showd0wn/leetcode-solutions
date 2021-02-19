// topics = ["数组", "贪心算法"]

function checkPossibility(nums: number[]): boolean {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n - 1; i += 1) {
    if (nums[i] > nums[i + 1]) {
      if (++count > 1) {
        return false;
      }
      // 当出现递减，存在两种修改方式 1.将当前数变小，2.将下个数变大
      // 优先将当前数变小，只有以下条件时选择变大后一个数（贪心思想）
      if (i > 0 && nums[i + 1] < nums[i - 1]) {
        nums[i + 1] = nums[i];
      }
    }
  }

  return true;
}
