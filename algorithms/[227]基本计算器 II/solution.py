# topics = ["栈", "数学"]


from typing import List


class Solution:
    def calculate(self, s: str) -> int:
        n = len(s)
        stack: List[int] = []
        preSign = '+'
        operand = 0

        for i in range(n):
            ch = s[i]

            if ch.isdigit():
                operand = (operand * 10) + int(ch)

            if i == n - 1 or s[i] in '+-*/':
                if preSign == '+':
                    stack.append(operand)
                elif preSign == '-':
                    stack.append(-operand)
                elif preSign == '*':
                    stack.append(stack.pop() * operand)
                elif preSign == '/':
                    # 负数向上取整，正数向下取整
                    stack.append(int(stack.pop() / operand))
                preSign = s[i]
                operand = 0

        return sum(stack)
