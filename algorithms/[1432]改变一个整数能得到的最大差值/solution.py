# topics = ["字符串", "贪心算法"]


class Solution:
    def maxDiff(self, num: int) -> int:
        """
        Greedy
        time O(log(num)), space O(log(num))
        """
        return self.get_max_num(num) - self.get_min_num(num)

    def get_max_num(self, num: int) -> int:
        nums = list(str(num))
        x = None

        for i, n in enumerate(nums):
            if n == x:
                nums[i] = '9'
            elif not x and n != '9':
                x = n
                nums[i] = '9'

        return int(''.join(nums))

    def get_min_num(self, num: int) -> int:
        nums = list(str(num))
        x = None
        r = ''

        for i, n in enumerate(nums):
            if n == x:
                nums[i] = r
            elif not x and i == 0 and n != '1':
                x = n
                r = '1'
                nums[i] = r
            elif not x and i > 0 and n != '1' and n != '0':
                x = n
                r = '0'
                nums[i] = r

        return int(''.join(nums))
