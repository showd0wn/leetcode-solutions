// topics = ["数组"]

function matrixReshape(nums: number[][], r: number, c: number): number[][] {
  // const flatted = nums.flat();
  const flatted = nums.reduce((acc, cur) => acc.concat(cur), []);
  const n = flatted.length;

  if (n != r * c) {
    return nums;
  }

  let i = 0;
  let j = 0;
  const res: number[][] = Array.from({ length: r }, () => []);

  for (const num of flatted) {
    res[i][j] = num;

    j += 1;
    if (j == c) {
      j = 0;
      i += 1;
    }
  }

  return res;
}
