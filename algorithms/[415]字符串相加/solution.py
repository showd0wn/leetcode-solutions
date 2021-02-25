# topics = ["字符串"]


class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        n = len(num1) - 1
        m = len(num2) - 1
        res = ''
        carry = 0

        while n >= 0 and m >= 0:
            sum = int(num1[n]) + int(num2[m]) + carry
            carry = sum // 10
            res = str(sum % 10) + res
            n -= 1
            m -= 1

        while n >= 0:
            sum = int(num1[n]) + carry
            carry = sum // 10
            res = str(sum % 10) + res
            n -= 1

        while m >= 0:
            sum = int(num2[m]) + carry
            carry = sum // 10
            res = str(sum % 10) + res
            m -= 1

        return str(carry) + res if carry else res
