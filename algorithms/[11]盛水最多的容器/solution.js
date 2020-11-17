/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const len = height.length;
  let res = 0;

  for (let i = 1; i < len; i += 1) {
    let max = 0;
    for (let j = 0; j + i < len; j += 1) {
      max = Math.max(Math.min(height[j], height[j + i]), max)
    }
    res = Math.max(res, max * i);
  }

  return res;
};

// 双指针
const maxArea2 = function(height) {
  const len = height.length;
  let [left, right] = [0, len - 1];
  let res = (len - 1) * Math.min(height[left], height[right]);

  while (left < right) {
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
    res = Math.max(res, (right - left) * Math.min(height[left], height[right]));
  }

  return res;
};
