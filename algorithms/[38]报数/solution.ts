function countAndSay(n: number): string {
  const res: string[] = [];
  res[1] = '1';

  for (let i = 2; i <= n; i += 1) {
    const last = res[i - 1];
    let total = '';
    let start = 0;
    for (let j = 0, len = last.length; j < len; j += 1) {
      if (last[j] !== last[j + 1]) {
        total += j - start + 1 + last[j];
        start = j + 1;
      }
    }
    res[i] = total;
  }

  return res[n];
};
