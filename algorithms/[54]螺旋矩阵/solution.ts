// topics = ["数组"]

function spiralOrder(matrix: number[][]): number[] {
  let top = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  const res: number[] = [];

  while (top < down && left < right) {
    for (let j = left; j <= right; j += 1) {
      res.push(matrix[top][j]);
    }

    for (let i = top + 1; i < down; i += 1) {
      res.push(matrix[i][right]);
    }

    for (let j = right; j >= left; j -= 1) {
      res.push(matrix[down][j]);
    }

    for (let i = down - 1; i > top; i -= 1) {
      res.push(matrix[i][left]);
    }

    top += 1;
    right -= 1;
    down -= 1;
    left += 1;
  }

  if (top == down && left == right) {
    res.push(matrix[top][left]);
  } else if (top == down) {
    for (let j = left; j <= right; j += 1) {
      res.push(matrix[top][j]);
    }
  } else if (left == right) {
    for (let i = top; i <= down; i += 1) {
      res.push(matrix[i][left]);
    }
  }

  return res;
}
