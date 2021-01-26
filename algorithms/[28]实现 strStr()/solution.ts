function strStr(haystack: string, needle: string): number {
  const l = haystack.length;
  const n = needle.length;

  if (n === 0) return 0;

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
