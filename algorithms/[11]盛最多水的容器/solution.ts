// topics = ["数组", "双指针"]

function maxArea(height: number[]): number {
  // 双指针法，近似题 42
  let left = 0;
  let right = height.length - 1;

  let res = 0;
  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    res = Math.max(res, (right - left) * Math.min(rightHeight, leftHeight));

    // 每次较小高度的指针
    if (leftHeight < rightHeight) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return res;
}
