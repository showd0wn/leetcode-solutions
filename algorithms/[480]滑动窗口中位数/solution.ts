function medianSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  const arr = nums.slice(0, k);
  arr.sort((a, b) => a - b);

  const res = [findMedian(arr)];

  for (let i = 1; i <= n - k; i += 1) {
    // 删除下标为 i - 1 的元素
    arr.splice(arr.indexOf(nums[i - 1]), 1);
    // 插入下标为 i + k - 1 的元素
    arr.splice(binarySearch(arr, nums[i + k - 1]), 0, nums[i + k - 1]);

    res.push(findMedian(arr));
  }

  return res;
}

function findMedian(nums: number[]): number {
  const n = nums.length;
  return (nums[Math.floor((n - 1) / 2)] + nums[Math.ceil((n - 1) / 2)]) / 2;
}

function binarySearch(nums: number[], target: number): number {
  const n = nums.length;

  let left = 0;
  let right = n;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
