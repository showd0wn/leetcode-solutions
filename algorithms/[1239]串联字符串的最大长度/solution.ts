// topics = ["回溯算法", "位运算"]

/**
 * 回溯 + 位运算
 * time O(∣Σ∣ + 2 ^ n), space O(n), ∣Σ∣位 arr 中所有字符串长度和, n 位 arr 的长度
 */
function maxLength(arr: string[]): number {
  const masks: number[] = [];

  for (const s of arr) {
    let mask = 0;
    for (const ch of s) {
      const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if ((mask >> idx) & 1) {
        mask = 0;
        break;
      }
      mask |= 1 << idx;
    }
    if (mask > 0) {
      masks.push(mask);
    }
  }

  let res = 0;

  const backtrack = function (pos = 0, mask = 0): void {
    if (pos == masks.length) {
      res = Math.max(res, mask.toString(2).split('0').join('').length);
      return;
    }
    if ((mask & masks[pos]) == 0) {
      backtrack(pos + 1, mask | masks[pos]);
    }
    backtrack(pos + 1, mask);
  };

  backtrack();

  return res;
}
