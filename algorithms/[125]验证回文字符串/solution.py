# topics = ["字符串"]

from re import sub


class Solution:
    def isPalindrome(self, s: str) -> bool:
        str = sub(r"[^0-9A-Za-z]", '', s).lower()
        return str == str[::-1]
