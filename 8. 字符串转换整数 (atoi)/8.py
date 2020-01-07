import re


class Solution:
    def myAtoi(self, str: str) -> int:
        str = str.strip()
        str = re.findall(r'(^[\+\-0]*\d+)\D*', str)

        try:
            result = int(''.join(str))
            return max(min(result, 2147483647), -2147483648)
        except Exception:
            return 0
