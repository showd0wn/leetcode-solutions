// topics = ["二分查找"]

function search(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return -1;
}
