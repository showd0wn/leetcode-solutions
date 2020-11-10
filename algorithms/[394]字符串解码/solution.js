/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  if (!s.length) return '';

  // 用于记录当前的字母
  let res = '';
  // 用于记录当前的数字
  let times = 0;
  // 记录出现过的数字
  let numStack = [];
  // 记录出现过的字符
  let strStack = [];

  for (let i = 0; i < s.length; i += 1) {
    let char = s[i];
    if (/[A-Za-z]/.test(char)) {
      res += char;
    } else if (/\d/.test(char)) {
      // 如果出现两位及以上数字字符，将其转化为正确的数字
      times = times * 10 + Number(char);
    } else if (char === '[') {
      numStack.push(times);
      strStack.push(res);
      times = 0;
      res = '';
    } else if (char === ']') {
      res = res.repeat(numStack.pop());
      res = strStack.pop() + res;
    } else {}
  }

  return res;
};
