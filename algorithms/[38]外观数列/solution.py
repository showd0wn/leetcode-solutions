# topics = ["字符串", "递归"]


class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        return self.say(self.countAndSay(n - 1))

    def say(self, s: str) -> str:
        i, j, count, res = 0, 0, 0, ""
        while j < len(s):
            if not s[i] == s[j]:
                res += str(count) + str(s[i])
                count = 0
                i = j
            else:
                count += 1
                j += 1

        if count > 0:
            res += str(count) + str(s[i])

        return res
