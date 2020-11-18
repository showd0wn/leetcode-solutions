/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
  const n = nums.length;
  const stack = [];
  const res = [];

  for (let i = 2 * n - 1; i >= 0; i -= 1) {
    while (stack.length && nums[i % n] >= stack[stack.length - 1]) {
      stack.pop();
    }
    res[i % n] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i % n]);
  }
  return  res;
};
