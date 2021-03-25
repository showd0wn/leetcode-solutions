# topics = ["栈"]

import re
from typing import List


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack: List[int] = []

        for ch in tokens:
            if re.match(r'^-?\d+$', ch):
                stack.append(int(ch))
            elif ch == '+':
                stack.append(stack.pop() + stack.pop())
            elif ch == '*':
                stack.append(stack.pop() * stack.pop())
            elif ch == '-':
                b = stack.pop()
                a = stack.pop()
                stack.append(a - b)
            elif ch == '/':
                b = stack.pop()
                a = stack.pop()
                # 浮点数取整
                stack.append(int(a / b))

        return stack[-1]
