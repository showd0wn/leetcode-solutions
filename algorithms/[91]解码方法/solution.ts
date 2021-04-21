// topics = ["动态规划"]

function numDecodings(s: string): number {
  const n = s.length;
  let pre = 1;
  let cur = s[0] != '0' ? 1 : 0;

  for (let i = 2; i < n + 1; i += 1) {
    let next = 0;
    // 使用了一个字符，即 s[i] 进行解码
    if (s[i - 1] != '0') {
      next += cur;
    }
    // 使用了两个字符，即 s[i-1] 和 s[i] 进行编码
    if (s[i - 2] == '1' || (s[i - 2] == '2' && s[i - 1] < '7')) {
      next += pre;
    }
    // 滚动
    [pre, cur] = [cur, next];
  }

  return cur;
}
