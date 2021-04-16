// topics = ["设计"]

class Solution {
  nums: number[];
  ori: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.ori = [...nums];
  }

  reset(): number[] {
    return this.ori;
  }

  // 洗牌算法
  shuffle(): number[] {
    for (let n = this.nums.length, i = n - 1; i >= 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }

    return this.nums;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
