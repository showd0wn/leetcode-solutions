# topics = ["栈"]

from typing import List


class Solution:
    def reverseParentheses(self, s: str) -> str:
        """
        Stack
        time O(n), space O(n), n 为字符串的长度
        """
        n = len(s)
        stack: List[int] = []
        pair = [0] * n

        # pair 记录对应的左右括号的索引
        for i in range(n):
            if s[i] == '(':
                stack.append(i)
            if s[i] == ')':
                j = stack.pop()
                pair[i] = j
                pair[j] = i

        i = 0
        # step = 1 表示向右走, step = -1 表示向左走
        step = 1
        res: List[str] = []
        while i < n:
            # 遇到括号，跳转到对应的另一端，并改变遍历方向
            if s[i] == '(' or s[i] == ')':
                i = pair[i]
                step = -step
            else:
                res.append(s[i])
            i += step

        return ''.join(res)
