# topics = ["数学", "动态规划"]


class Solution:
    def nthUglyNumber(self, n: int) -> int:
        nums = [1]
        i2 = i3 = i5 = 0

        for _ in range(1, n):
            v2 = 2 * nums[i2]
            v3 = 3 * nums[i3]
            v5 = 5 * nums[i5]
            if v2 <= v3 and v2 <= v5:
                i2 += 1
            if v3 <= v2 and v3 <= v5:
                i3 += 1
            if v5 <= v2 and v3 <= v3:
                i5 += 1
            nums.append(min(v2, v3, v5))

        return nums[-1]
