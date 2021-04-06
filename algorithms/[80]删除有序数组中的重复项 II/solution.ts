// topics = ["数组", "双指针"]

function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n <= 2) {
    return n;
  }
  let slow = 2;
  let fast = 2;
  while (fast < n) {
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast];
      slow += 1;
    }
    fast += 1;
  }
  return slow;
}
