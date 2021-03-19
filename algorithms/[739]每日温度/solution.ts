// topics = ["栈"]

function dailyTemperatures(T: number[]): number[] {
  const n = T.length;
  const res = new Array<number>(n).fill(0);
  const stack: number[] = [];

  for (let j = 0; j < n; j += 1) {
    while (stack.length && T[stack[stack.length - 1]] < T[j]) {
      const i = stack.pop()!;
      res[i] = j - i;
    }
    stack.push(j);
  }

  return res;
}
