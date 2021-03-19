// topics = ["位运算", "哈希表"]

// 参考 https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/solution/shou-hua-tu-jie-si-lu-jie-xi-leetcode-11-12dy/
function findNumOfValidWords(words: string[], puzzles: string[]): number[] {
  const map = new Map<number, number>();
  for (const word of words) {
    const bits = getBits(word);
    if (map.has(bits)) {
      map.set(bits, map.get(bits)! + 1);
    } else {
      map.set(bits, 1);
    }
  }

  const len = puzzles.length;
  const res = new Array<number>(len).fill(0);
  for (let i = 0; i < len; i += 1) {
    const puzzle = puzzles[i];
    const puzzleBit = getBits(puzzle);
    const first = getBits(puzzle[0]);

    // 枚举 puzzle 对应二进制数的子集，将其在哈希映射中对应的值累计入答案
    let n = puzzleBit;
    while (n > 0) {
      if ((n & first) != 0 && map.has(n)) {
        res[i] += map.get(n)!;
      }
      n = (n - 1) & puzzleBit;
    }
  }

  return res;
}

// 转二进制数表示
// 单词只包含 26 个小写字母，可以压缩到一个长为 26 的 int 中。int 中的每一位取 0 和 1 表示字符是否出现过。
function getBits(s: string): number {
  let res = 0;
  for (const c of s) {
    const offset = c.charCodeAt(0) - 97;
    const status = 1 << offset;
    res = res | status;
  }
  return res;
}
