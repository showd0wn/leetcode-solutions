# topics = ["字符串"]


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        ls = list(s)
        lt = list(t)
        ls.sort()
        lt.sort()
        return ls == lt
