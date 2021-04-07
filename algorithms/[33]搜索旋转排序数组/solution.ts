// topics = ["二分查找"]

function search(nums: number[], target: number): number {
  const n = nums.length;
  let i = 0;
  let j = n - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] >= nums[i]) {
      if (nums[i] <= target && target < nums[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[j]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }

  return -1;
}
