/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  const len = nums.length;
  let k = -1;
  let l = -1;

  // 第一遍扫描
  for (let i = len - 2; i >= 0; i -= 1) {
    if (nums[i] < nums[i + 1]) {
      k = i;
      break;
    }
  }
  if (k === -1) {
    return nums.reverse();
  }

  // 第二遍扫描
  for (let j = len - 1; j >= 0; j -= 1) {
    if (nums[j] > nums[k]) {
      l = j;
      break;
    }
  }

  [nums[l], nums[k]] = [nums[k], nums[l]]

  nums.splice(k + 1, len - k, ...nums.slice(k + 1).reverse())
};
