class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        for i in s:
            if not len(stack):
                stack.append(i)
                continue
            top = stack[len(stack) - 1]
            dis = ord(i) - ord(top)
            if dis == 1 or dis == 2:
                stack.pop()
            else:
                stack.append(i)

        return not len(stack)
