// topics = ["动态规划"]

class NumArray {
  preSum: number[];
  constructor(nums: number[]) {
    this.preSum = [0];
    for (let i = 1, len = nums.length; i < len + 1; i += 1) {
      this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
  }

  sumRange(i: number, j: number): number {
    return this.preSum[j + 1] - this.preSum[i];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
