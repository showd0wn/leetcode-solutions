// topics = ["二分查找"]

/**
 * Binary Search
 * time O(logn), space O(1)
 */
function peakIndexInMountainArray(arr: number[]): number {
  const n = arr.length;
  let i = 0;
  let j = n;

  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if ((m > 0 && arr[m] < arr[m - 1]) || (m < n - 1 && arr[m] > arr[m + 1])) {
      j = m;
    } else {
      i = m + 1;
    }
  }

  return i;
}
