// topics = ["回溯算法"]

function totalNQueens(n: number): number {
  let res = 0;
  const path: number[] = [];

  const backtrack = (f = 0): void => {
    if (f == n) {
      res += 1;
      return;
    }

    for (let i = 0; i < n; i += 1) {
      if (isValid(i)) {
        path.push(i);
        backtrack(f + 1);
        path.pop();
      }
    }
  };

  const isValid = (i: number): boolean => {
    if (path.length == 0) {
      return true;
    }
    for (const [idx, col] of path.entries()) {
      if (i == col || Math.abs(i - col) == Math.abs(path.length - idx)) {
        return false;
      }
    }
    return true;
  };

  backtrack();

  return res;
}
