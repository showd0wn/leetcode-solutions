# topics = ["数学"]


class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x == 0:
            return True
        elif x < 0 or x % 10 == 0:
            return False
        else:
            reverse_x = 0

            # 当原始数字小于或等于反转后的数字时，就意味着已经处理了一半的数字
            while x > reverse_x:
                remainder = x % 10
                reverse_x = reverse_x * 10 + remainder
                x = x // 10

            # 当x为奇数时, 只要满足 reverse_x//10 == x 即可
            return reverse_x == x or reverse_x // 10 == x
