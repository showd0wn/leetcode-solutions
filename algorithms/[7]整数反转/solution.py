# topics = ["数学"]

class Solution:
    def reverse(self, x: int) -> int:
        limit = 2 ** 31
        if x > limit:
            return 0

        bool = x > 0
        number = int(str(x if bool else 0 - x)[::-1])

        if number > limit:
            return 0

        return number if bool else 0 - number
