# topics = ["数组"]


from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        """
        Boyer-Moore 投票算法
        参考 https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/
        """
        major = nums[0]
        cnt = 0

        for num in nums:
            if cnt == 0:
                major = num
                cnt = 1
            elif major == num:
                cnt += 1
            else:
                cnt -= 1

        return major
