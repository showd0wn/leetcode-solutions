function numEquivDominoPairs(dominoes: number[][]): number {
  const list = dominoes.map((item): string => {
    item.sort();
    return item.join('');
  });

  let res = 0;

  const map = new Map<string, number>();
  for (const ele of list) {
    if (map.has(ele)) {
      res += map.get(ele)!;
      map.set(ele, map.get(ele)! + 1);
    } else {
      map.set(ele, 1);
    }
  }

  return res;
};
