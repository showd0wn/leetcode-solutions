// topics = ["位运算"]

/**
 * 枚举
 * time O(1), space O(1)
 */
function readBinaryWatch(turnedOn: number): string[] {
  const res: string[] = [];
  for (let h = 0; h < 12; h += 1) {
    for (let m = 0; m < 60; m += 1) {
      // 枚举所有可能值，计算其二进制中 1 的个数
      if (h.toString(2).split('0').join('').length + m.toString(2).split('0').join('').length == turnedOn) {
        res.push(h + ':' + (m < 10 ? '0' : '') + m);
      }
    }
  }
  return res;
}
