# topics = ["栈", "数学"]

from typing import List


class Solution:
    def calculate(self, s: str) -> int:
        stack: List[int] = []
        operand = 0
        res = 0
        # 1 为正，0 为负
        sign = 1

        for ch in s:
            if ch.isdigit():
                operand = (operand * 10) + int(ch)

            elif ch == '+':
                res += sign * operand
                sign = 1
                operand = 0

            # 减法视作加负数
            elif ch == '-':
                res += sign * operand
                sign = -1
                operand = 0

            elif ch == '(':
                stack.append(res)
                stack.append(sign)

                sign = 1
                res = 0

            elif ch == ')':
                res += sign * operand
                res *= stack.pop()
                res += stack.pop()

                operand = 0

        return res + sign * operand
