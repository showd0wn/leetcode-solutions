function strStr(haystack: string, needle: string): number {
  const l = haystack.length;
  const n = needle.length;

  if (n === 0) return 0;

  // 滑动窗口，只有第一个字符相同再进行比较
  for (let i = 0; i < l - n + 1;) {
    if (haystack[i] !== needle[0]) {
      i += 1;
      continue;
    }

    let j = 0;
    while (haystack[i] === needle[j]) {
      i += 1;
      j += 1;
      if (j === n) {
        return i - n;
      }
    }

    i = i - j + 1;
  }

  return -1;
};


// 解法二 KMP
function strStr2(haystack: string, needle: string): number {
  const l = haystack.length;
  const n = needle.length;

  const next = buildNext(needle);

  // 主串指针
  let i = 0;
  // 模式串指针
  let j = 0;

  while (i < l && j < n) {
    if (j === -1 || haystack[i] === needle[j]) {
      // 第一个字符匹配或者模式串指针最左，逐个对比
      i += 1;
      j += 1;
    } else {
      // 不匹配则模式串指针回退
      j = next[j];
    }
  }

  if (j === n) {
    return i - j;
  }

  return -1;
}

// 前缀表：记录下标i之前（包括i）的字符串中，有多大长度的相同前缀后缀。
// next 数组即为右移一位的前缀表（模式串中每个点之前的子串的最大公共前后缀长度）
// next 数组的计算可以看做也是一个字符串模式匹配问题，其中主串就是整个模式串，子串是每一个位置的前子串
function buildNext(str: string): number[] {
  const next: number[] = [-1];
  const len = str.length;

  // 指向后缀终止位置，初始为 0
  let i = 0;
  // 指向前缀终止位置，初始为 -1
  let j = -1;

  while (i < len) {
    if (j === -1 || str[i] === str[j]) {
      i += 1;
      j += 1;
      next[i] = j;
    } else {
      // 向前回溯
      j = next[j];
    }
  }

  return next;
}
