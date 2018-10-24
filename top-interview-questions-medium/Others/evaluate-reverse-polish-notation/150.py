class Solution:
    def evalRPN(self, tokens):
        """
        :type tokens: List[str]
        :rtype: int
        """
        stack = []
        for v in tokens:
            if v not in ['+', '-', '*', '/']:
                stack.append(int(v))
            else:
                v2, v1 = stack.pop(), stack.pop()
                if v == '+': stack.append(v1 + v2)
                if v == '-': stack.append(v1 - v2)
                if v == '*': stack.append(v1 * v2)
                if v == '/': stack.append(int(v1 / v2))
        return stack.pop()
