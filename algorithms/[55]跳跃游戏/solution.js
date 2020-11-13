/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  const len = nums.length;
  if (len === 0 || len === 1) return true;

  let tmp = 1;
  for (let i = len - 2; i >= 0; i -= 1) {
    if (nums[i] < tmp) {
      tmp += 1;
    } else {
      tmp = 1;
    }
  }

  return tmp === 1;
};
