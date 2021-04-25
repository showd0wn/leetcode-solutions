// topics = ["回溯算法"]

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (idx = 1): void => {
    const len = path.length;
    if (len == k) {
      res.push([...path]);
      return;
    }
    for (let i = idx; i <= n; i += 1) {
      if (len > k) {
        return;
      }
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  return res;
}
