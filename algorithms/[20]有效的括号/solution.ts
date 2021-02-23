// topics = ["字符串", "栈"]

function isValid(s: string): boolean {
  const stack: String[] = [];

  for (let c of s) {
    const last = stack[stack.length - 1];
    if ((c == ')' && last == '(') || (c == ']' && last == '[') || (c == '}' && last == '{')) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length == 0;
}
