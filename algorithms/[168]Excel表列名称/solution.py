# topics = ["数学"]


class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        """
        Math
        time O(log26columnNumber), space O(log26columnNumber)
        """
        res = ''
        n = 26
        while columnNumber:
            d = columnNumber % n
            if d == 0:
                d = n
                columnNumber -= n
            res = chr(d + 64) + res
            columnNumber //= n

        return res
