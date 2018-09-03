class Solution:
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        if n == 1:
            return '1'
        return self.say(self.countAndSay(n - 1))

    def say(self, num):
        i, j, count, res = 0, 0, 0, ""
        while j < len(num):
            if not num[i] == num[j]:
                res += str(count) + str(num[i])
                count = 0
                i = j
            else:
                count += 1
                j += 1
        if count > 0:
            res += str(count) + str(num[i])
        return res
