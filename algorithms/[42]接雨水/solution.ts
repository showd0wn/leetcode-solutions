// topics = ["双指针"]

function trap(height: number[]): number {
  const n = height.length;

  if (n < 3) return 0;

  // 从左边向右边扫描：记录当前位置左边的所有柱形的最高高度
  const leftMax: number[] = [];
  // 从右边向左边扫描：记录当前位置右边的所有柱形的最高高度
  const rightMax: number[] = [];

  leftMax[0] = 0;
  rightMax[n - 1] = 0;

  for (let i = 1; i < n; i += 1) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let i = n - 2; i >= 0; i -= 1) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  let res = 0;
  for (let i = 1; i < n - 1; i += 1) {
    res += Math.max(Math.min(leftMax[i], rightMax[i]) - height[i], 0);
  }

  return res;
}
