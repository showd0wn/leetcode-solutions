# topics = ["字符串"]


class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))
