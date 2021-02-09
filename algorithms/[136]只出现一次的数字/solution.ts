// topics = ["位运算"]

function singleNumber(nums: number[]): number {
  /**
   * 1. 任何数和 0 做异或运算，结果是自身
   * 2. 任何数和自身做异或运算，结果是 0
   * 3. 异或运算满足交换律和结合律
   */
  return nums.reduce((acc, cur) => acc ^ cur);
}
