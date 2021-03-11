// topics = ["栈", "数学"]

function calculate(s: string): number {
  const stack: number[] = [];
  const queue = toRPN(s);

  queue.reverse();

  // 求解逆波兰式
  while (queue.length) {
    const c = queue.pop()!;

    if (/[0-9]/.test(c)) {
      stack.push(Number(c));
    } else if (c == '+') {
      stack.push(stack.pop()! + stack.pop()!);
    } else if (c == '*') {
      stack.push(stack.pop()! * stack.pop()!);
    } else if (c == '-') {
      const b = stack.pop()!;
      const a = stack.length ? stack.pop()! : 0;
      stack.push(a - b);
    } else if (c == '/') {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(Math.floor(a / b));
    }
  }

  return stack[stack.length - 1];
}

// 中缀表达式转后缀表达式（逆波兰式）
function toRPN(str: string): string[] {
  const s: string[] = [];
  const q: string[] = [];
  let operand = '';

  for (let i = 0, n = str.length; i < n; i += 1) {
    const ch = str[i];
    if (/[0-9]/.test(ch)) {
      operand += ch;
    }
    if (i == n - 1 || ['+', '-', '*', '/'].includes(ch)) {
      if (operand) {
        q.push(operand);
        operand = '';
      }
      if (ch == '*' || ch == '/') {
        while (s[s.length - 1] == '*' || s[s.length - 1] == '/') {
          q.push(s.pop()!);
        }
        s.push(ch);
      } else if (ch == '+' || ch == '-') {
        while (s.length) {
          q.push(s.pop()!);
        }
        s.push(ch);
      }
    }
  }

  while (s.length) {
    q.push(s.pop()!);
  }

  return q;
}
