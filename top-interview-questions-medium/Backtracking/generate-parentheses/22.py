class Solution:
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        self.helper(result, '', 0, 0, n)
        return result

    def helper(self, list, curr, open, close, max):
        if len(curr) == max * 2:
            list.append(curr)
            return
        if open < max:
            self.helper(list, curr + '(', open + 1, close, max)
        if close < open:
            self.helper(list, curr + ')', open, close + 1, max)
