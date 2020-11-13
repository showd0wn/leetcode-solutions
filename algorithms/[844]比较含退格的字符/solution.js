/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  return handleString(S) === handleString(T);
};

const handleString = function(str) {
  const len = str.length;
  if (!len) return '';

  let stack  = [];
  for (let i = 0; i < len; i += 1) {
    const c = str[i];
    if (/[a-z]/.test(c)) {
      stack.push(c);
    } else if (c === '#' && stack.length) {
      stack.pop();
    } else {}
  }

  return stack.join('');
}
