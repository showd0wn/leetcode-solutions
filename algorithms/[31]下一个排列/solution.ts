// topics = ["数组"]

/**
 * 两次遍历
 * time O(n), space O(1), n 为数组长度
 */
function nextPermutation(nums: number[]): void {
  const n = nums.length;

  // 从后往前遍历，找到第一个 i，存在 nums[i] < nums[i + 1]
  let i = n - 2;
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
    i -= 1;
  }

  // 不存在下一个排序
  if (i < 0) {
    nums.reverse();
    return;
  }

  // 从后往前遍历，找到第一个 j，存在 nums[i] < nums[j]。交换 nums[i] 和 nums[j]
  let j = n - 1;
  while (j > i) {
    if (nums[j] > nums[i]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      break;
    }
    j -= 1;
  }

  // 反转 [i + 1, n - 1]
  let start = i + 1;
  let end = n - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start += 1;
    end -= 1;
  }
}
