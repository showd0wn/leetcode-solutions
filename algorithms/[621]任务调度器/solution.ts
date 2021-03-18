// topics = ["贪心算法"]

function leastInterval(tasks: string[], n: number): number {
  const counter = new Map<string, number>();
  for (const ch of tasks) {
    if (counter.has(ch)) {
      counter.set(ch, counter.get(ch)! + 1);
    } else {
      counter.set(ch, 1);
    }
  }

  let list = [...counter];
  let res = '';

  // 当 list 中还有剩余字符
  while (list.length) {
    // 按出现次数逆序排序
    list.sort((a, b) => b[1] - a[1]);
    // 过滤用完的字符
    list = list.filter(v => v[1] != 0);

    for (let i = 0; i <= n; i += 1) {
      if (list[i]) {
        res += list[i][0];
        list[i][1] -= 1;
      } else {
        res += ' ';
      }
    }
  }

  return res.trim().length;
}
