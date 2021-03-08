// topics = ["栈", "数学"]

function calculate(s: string): number {
  const stack: number[] = [];
  let operand = 0;
  let res = 0;
  let sign = 1;

  for (let ch of s) {
    if (/[0-9]/.test(ch)) {
      operand = operand * 10 + Number(ch);
    } else if (ch == '+') {
      res += sign * operand;
      sign = 1;
      operand = 0;
    } else if (ch == '-') {
      res += sign * operand;
      sign = -1;
      operand = 0;
    } else if (ch == '(') {
      stack.push(res);
      stack.push(sign);

      sign = 1;
      res = 0;
    } else if (ch == ')') {
      res += sign * operand;
      res *= stack.pop()!;
      res += stack.pop()!;

      operand = 0;
    }
  }

  return res + sign * operand;
}
