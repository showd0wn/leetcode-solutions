// topics = ["数学"]

/**
 * Math
 * time O(n), space O(1), n 为数组长度
 */
function xorGame(nums: number[]): boolean {
  if (nums.length % 2 == 0) {
    return true;
  }
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }
  return xor == 0;
}
