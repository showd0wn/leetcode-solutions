// topics = ["栈", "贪心算法"]

// 【贪心思想】遍历中间值，左边值尽量小（事先遍历一次），右边值尽量大（单调栈维护）
function find132pattern(nums: number[]): boolean {
  const n = nums.length;

  // leftMin[i] 为索引小于 i 的区间的最小值
  const leftMin: number[] = [];
  leftMin[1] = nums[0];
  for (let i = 2; i < n; i += 1) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1]);
  }

  // 从右往左，维护单调不增栈
  const stack: number[] = [];
  for (let j = n - 1; j > 0; j -= 1) {
    let k = 0;
    while (stack.length && nums[stack[stack.length - 1]] < nums[j]) {
      k = stack.pop()!;
    }
    // 利用单调栈的性质，nums[k] 为小于 nums[j] 的最大值
    if (k && nums[k] > leftMin[j]) {
      return true;
    }
    // 索引入栈
    stack.push(j);
  }

  return false;
}
