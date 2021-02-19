// topics = ["二分查找"]

class KthLargest {
  k: number;
  nums: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
  }

  add(val: number): number {
    let left = 0;
    let right = this.nums.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.nums[mid] > val) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.nums.splice(left, 0, val);

    return this.nums[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
