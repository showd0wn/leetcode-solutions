/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  // const len = nums.length;
  // const result = [];
  // for (let i = 0; i < len; i += 1) {
  //   const x = nums[i];
  //   const map = new Map();
  //   const right = nums.slice(i + 1);
  //   for (let j = 0; j < len -i - 1; j += 1) {
  //     const y = right[j];
  //     if (map.has(y)) {
  //       result.push([x, y, map.get(y)].sort((a, b) => a - b));
  //       map.delete(y);
  //       continue;
  //     }

  //     if (!map.has(-x - y)) {
  //       map.set(-x - y, y);
  //     }
  //   }
  // }

  // const tmp = result.map(array => array.join(','));
  // return [...new Set(tmp)].map(item => item.split(','))

  // 排序 + 双指针
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++;
        while (L < R && nums[R] == nums[R - 1]) R--;
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return ans;
};
