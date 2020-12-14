/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
  nums.sort();

  const len = nums.length;

  let num;
  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[i + 1]) {
      num = nums[i];
      break;
    }
  }

  return [num, num + (len + 1) * len / 2 - sum(nums)];
};

const sum = function(arr) {
  return arr.reduce((a, b) => a + b);
};
