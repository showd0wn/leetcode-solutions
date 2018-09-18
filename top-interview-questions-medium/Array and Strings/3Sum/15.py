class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result = []
        n = len(nums)

        if n < 3: return result

        nums.sort()
        for i in range(n - 2):
            if nums[i] > 0: return result
            if i > 0 and nums[i] == nums[i - 1]: continue
            a = nums[i]
            start = i + 1
            end = n - 1
            while start < end:
                b = nums[start]
                c = nums[end]
                if a + b + c == 0:
                    result.append([a, b, c])
                    start += 1
                    end -= 1
                    while start < end and nums[start] == nums[start - 1]: start += 1
                    while start < end and nums[end] == nums[end + 1]: end -= 1
                elif a + b + c > 0:
                    end -= 1
                else:
                    start += 1

        return result
