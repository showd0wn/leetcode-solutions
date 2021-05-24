# topics = ["数学"]


class Solution:
    def intToRoman(self, num: int) -> str:
        """
        模拟
        time O(1), space O(1), 对于本题的数据范围, 循环次数有确定上限
        """
        res = ''
        n = 1
        d = {
            1: ('I', 'V', 'X'),
            10: ('X', 'L', 'C'),
            100: ('C', 'D', 'M'),
            1000: ('M'),
        }

        while num:
            curr = num % 10
            num //= 10

            if 1 <= curr < 4:
                res = d[n][0] * curr + res
            elif curr == 4:
                res = d[n][0] + d[n][1] + res
            elif 5 <= curr < 9:
                res = d[n][1] + d[n][0] * (curr - 5) + res
            elif curr == 9:
                res = d[n][0] + d[n][2] + res

            n *= 10

        return res
