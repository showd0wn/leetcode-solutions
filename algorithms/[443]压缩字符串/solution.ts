// topics = ["字符串", "双指针"]

function compress(chars: string[]): number {
  const n = chars.length;

  // 当前连续字符起始位置
  let anchor = 0;
  // w: “写”指针
  let w = 0;

  // r: “读”指针
  for (let r = 0; r < n; r += 1) {
    if (chars[r] != chars[r + 1] || r == n - 1) {
      chars[w] = chars[anchor];
      w += 1;
      if (r > anchor) {
        for (const digit of String(r - anchor + 1)) {
          chars[w] = digit;
          w += 1;
        }
      }
      // 更新连续字符起始位置
      anchor = r + 1;
    }
  }

  return w;
}
