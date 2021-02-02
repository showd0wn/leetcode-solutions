function reverseWords(s: string): string {
  // 对于字符串不可变语言，不存在常数空间复杂度的解法
  const n = s.length;
  const res: string[] = [];

  // 记录当前单词
  let word = '';
  for (let i = 0; i < n; i += 1) {
    if (s[i] == ' ') {
      if (word.length != 0) {
        res.unshift(word);
      }
      word = '';
    } else {
      word += s[i];
      // 遍历到字符串结尾
      if (i == n - 1) {
        res.unshift(word);
      }
    }
  }

  return res.join(' ');
};
