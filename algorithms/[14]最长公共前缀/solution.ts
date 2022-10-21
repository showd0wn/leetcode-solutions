// topics = ["字符串"]

/**
 * 遍历
 * time O(mn) space O(1), m 为 strs 中字符串平均长度, n 为 strs 长度
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = "";

  // 横向比较
  for (let i = 0; i < strs.length; i += 1) {
    if (i === 0) {
      prefix = strs[i];
    } else {
      prefix = lcp(prefix, strs[i]);
    }
    if (prefix === "") {
      break;
    }
  }

  return prefix;
}

function lcp(str1: string, str2: string): string {
  const len = Math.min(str1.length, str2.length);
  let i = 0;
  while (i < len && str1[i] === str2[i]) {
    i += 1;
  }
  return str1.slice(0, i);
}
