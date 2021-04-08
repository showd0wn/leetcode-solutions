// topics = ["二分查找"]

function findMin(nums: number[]): number {
  const n = nums.length;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    const mid = Math.floor((i + j) / 2);

    if (nums[mid] < nums[j]) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }

  return nums[i];
}
