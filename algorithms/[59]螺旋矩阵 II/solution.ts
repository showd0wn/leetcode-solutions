// topics = ["数组"]

function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => new Array(n).fill(n * n));
  let num = 1;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;

  while (top < bottom && left < right) {
    for (let i = left; i < right; i += 1) {
      res[top][i] = num;
      num += 1;
    }
    for (let i = top; i < bottom; i += 1) {
      res[i][right] = num;
      num += 1;
    }
    for (let i = right; i >= left + 1; i -= 1) {
      res[bottom][i] = num;
      num += 1;
    }
    for (let i = bottom; i >= top + 1; i -= 1) {
      res[i][left] = num;
      num += 1;
    }
    top += 1;
    right -= 1;
    bottom -= 1;
    left += 1;
  }

  return res;
}
