//  topics = ["二分查找"]

/**
 * Binary Search
 * time O(logn), space O(1)
 */
const guessNumber = function (n: number) {
  let left = 1;
  let right = n;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (guess(mid) <= 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
