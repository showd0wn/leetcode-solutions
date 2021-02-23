// topics = ["数组", "二分查找"]

function searchInsert(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length;

  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  return i;
}
