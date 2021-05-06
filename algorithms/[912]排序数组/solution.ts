// topics = ["数组", "分治算法"]

/**
 * 快速排序
 * time O(nlogn), space O(logn), n 为数组长度
 */
function sortArray(nums: number[]): number[] {
  const n = nums.length;

  const quickSort = (left: number, right: number): number[] => {
    if (left < right) {
      const partitionIndex = partition(left, right);
      quickSort(left, partitionIndex - 1);
      quickSort(partitionIndex + 1, right);
    }
    return nums;
  };

  const partition = (left: number, right: number): number => {
    const privot = left;
    let i = privot + 1;

    for (let j = i; j <= right; j += 1) {
      if (nums[j] < nums[privot]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i += 1;
      }
    }

    [nums[privot], nums[i - 1]] = [nums[i - 1], nums[privot]];

    return i - 1;
  };

  return quickSort(0, n - 1);
}
