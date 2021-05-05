# topics = ["递归"]


class Tri:
    def __init__(self):
        n = 38
        self.nums = nums = [0] * n
        nums[1] = nums[2] = 1
        for i in range(3, n):
            nums[i] = nums[i - 1] + nums[i - 2] + nums[i - 3]


class Solution:
    """
    递归 + 记忆化
    time O(1), space O(1)
    """
    t = Tri()

    def tribonacci(self, n: int) -> int:
        return self.t.nums[n]
