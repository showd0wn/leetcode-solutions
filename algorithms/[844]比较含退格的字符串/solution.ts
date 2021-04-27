// topics = ["栈"]

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
