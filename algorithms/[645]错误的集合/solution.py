# topics = ["位运算"]

from typing import List


class Solution:
    # 数学加减法，利用 set 找到重复的数
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        miss_num = sum(nums) - sum(set(nums))
        repeat_num = sum([i for i in range(1, n + 1)]) - sum(set(nums))

        return [miss_num, repeat_num]

    # 异或运算 space o(1)
    # 参考 https://leetcode-cn.com/problems/set-mismatch/solution/zhi-chu-xian-yi-ci-de-shu-xi-lie-wei-yun-suan-by-f/
    def findErrorNums2(self, nums: List[int]) -> List[int]:
        n = len(nums)

        # 所有数字异或的结果
        ret = 0
        for n in nums:
            ret ^= n
        for i in range(1, n + 1):
            ret ^= i

        # ret = a^b
        a = 0
        b = 0

        # 找到第一位不是 0 的
        h = 1
        while ret & h == 0:
            h <<= 1

        for n in nums:
            # 根据该位是否为 0 分为两组， a 和 b 分别在两组
            if h & n == 0:
                a ^= n
            else:
                b ^= n
        for n in range(1, n + 1):
            # 根据该位是否为 0 分为两组， a 和 b 分别在两组
            if h & n == 0:
                a ^= n
            else:
                b ^= n

        # 最后遍历 nums，确定两个数字中哪个为重复数字，哪个为缺失数字
        for num in nums:
            if a == num:
                return [a, b]
            if b == num:
                return [b, a]

        return []
