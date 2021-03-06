// topics = ["栈"]

function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const res: number[] = new Array(n).fill(-1);
  const stack: number[] = [];

  for (let j = 0; j < 2 * n - 1; j += 1) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[j % n]) {
      const i = stack.pop()!;
      res[i] = nums[j % n];
    }
    stack.push(j % n);
  }

  return res;
}
