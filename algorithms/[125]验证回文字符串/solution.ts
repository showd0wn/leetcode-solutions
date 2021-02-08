// topics = ["字符串", "双指针"]

function isPalindrome(s: string): boolean {
  s = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase();
  if (!s) return true;

  let i = 0;
  let j = s.length - 1;

  // 双指针判断回文
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
}
