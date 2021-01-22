function firstUniqChar(s: string): number {
  /**
   * 解法一
   * 辅助 map
   */
  const map = new Map<string, number[]>();
  for (let i = 0, len = s.length; i < len; i += 1) {
    const char = s[i];
    if (map.has(char)) {
      map.get(char)?.push(i);
    } else {
      map.set(char, [i]);
    }
  }

  const res = [...map.values()].filter(list => list.length === 1);
  return res[0]?.[0] ?? -1;

  /**
   * 解法二
   * 正向 & 反向搜索
   */
  // for (let i = 0, len = s.length; i < len; i += 1) {
  //   if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i;
  // }
  // return -1;
};
