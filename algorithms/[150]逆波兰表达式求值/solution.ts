// topics = ["栈"]

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let i = 0, n = tokens.length; i < n; i += 1) {
    const ch = tokens[i]!;

    if (/[0-9]/.test(ch)) {
      stack.push(Number(ch));
    } else if (ch == '+') {
      stack.push(stack.pop()! + stack.pop()!);
    } else if (ch == '*') {
      stack.push(stack.pop()! * stack.pop()!);
    } else if (ch == '-') {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(a - b);
    } else if (ch == '/') {
      const b = stack.pop()!;
      const a = stack.pop()!;
      // 位运算取整
      stack.push(~~(a / b));
    }
  }

  return stack[stack.length - 1];
}
