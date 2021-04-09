// topics = ["回溯算法"]

function solveNQueens(n: number): string[][] {
  const cols: number[][] = [];
  const path: number[] = [];

  const backtrack = (f = 0): void => {
    if (f == n) {
      cols.push([...path]);
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

  const m = cols.length;
  const res = cols.map(col =>
    col.map(idx => {
      let s = '';
      for (let i = 0; i < n; i += 1) {
        s += idx == i ? 'Q' : '.';
      }
      return s;
    }),
  );

  return res;
}
