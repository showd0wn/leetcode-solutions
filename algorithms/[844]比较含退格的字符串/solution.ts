// topics = ["栈"]

/**
 * Stack
 * time O(n + m), space O(n + m), n 和 m 分别为 S 和 T 的长度
 */
function backspaceCompare(S: string, T: string): boolean {
  return handleString(S) === handleString(T);
}

const handleString = function (str: string): string {
  const len = str.length;
  if (!len) return '';

  const stack = [];
  for (let i = 0; i < len; i += 1) {
    const c = str[i];
    if (/[a-z]/.test(c)) {
      stack.push(c);
    } else if (c === '#' && stack.length) {
      stack.pop();
    }
  }

  return stack.join('');
};
