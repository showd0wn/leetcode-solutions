// topics = ["数组", "双指针"]

/**
 * 双指针
 * time O(n), space O(1), n 为 height 长度
 */
function maxArea(height: number[]): number {
  // 双指针法，近似题 42.接雨水
  let left = 0;
  let right = height.length - 1;

  let res = 0;
  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    res = Math.max(res, (right - left) * Math.min(rightHeight, leftHeight));

    // 每次较小高度的指针
    // 参考 https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/
    if (leftHeight < rightHeight) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return res;
}
