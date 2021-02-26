// topics = ["位运算", "哈希表"]

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
  const res = new Array(len).fill(0);
  for (let i = 0; i < len; i += 1) {
    const puzzle = puzzles[i];
    const puzzleBit = getBits(puzzle);
    const first = getBits(puzzle[0]);

    let n = puzzleBit;
    while (n > 0) {
      if ((n & first) != 0 && map.has(n)) {
        res[i] += map.get(n);
      }
      n = (n - 1) & puzzleBit;
    }
  }

  return res;
}

// 转二进制数表示
function getBits(s: string): number {
  let res = 0;
  for (const c of s) {
    const offset = c.charCodeAt(0) - 97;
    const status = 1 << offset;
    res = res | status;
  }
  return res;
}
