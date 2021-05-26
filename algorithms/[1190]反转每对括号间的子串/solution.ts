// topics = ["递归", "栈"]

/**
 * Recursion
 * time O(n^2), space O(n), n 为字符串的长度
 * 近似题 394.字符串解码
 */
function reverseParentheses(s: string): string {
  if (/^[a-z]*$/.test(s)) {
    return s;
  }

  const t = s.replace(/\([a-z]*\)/, match => match.slice(1, -1).split('').reverse().join(''));

  return reverseParentheses(t);
}

/**
 * Stack
 * time O(n^2), space O(n), n 为字符串的长度
 */
function reverseParentheses2(s: string): string {
  const stk = [];
  let str = '';
  for (const ch of s) {
    if (ch === '(') {
      stk.push(str);
      str = '';
    } else if (ch === ')') {
      str = str.split('').reverse().join('');
      str = stk[stk.length - 1] + str;
      stk.pop();
    } else {
      str += ch;
    }
  }
  return str;
}
