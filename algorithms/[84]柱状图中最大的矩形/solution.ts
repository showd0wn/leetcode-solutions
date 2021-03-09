// topics = ["数组", "栈"]

function largestRectangleArea(heights: number[]): number {
  heights = [0, ...heights, 0];
  const n = heights.length;
  const stack: number[] = [];
  let res = 0;

  for (let i = 0; i < n; i += 1) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const cur = stack.pop()!;
      const dis = i - stack[stack.length - 1] - 1;
      res = Math.max(res, heights[cur] * dis);
    }
    stack.push(i);
  }

  return res;
}
