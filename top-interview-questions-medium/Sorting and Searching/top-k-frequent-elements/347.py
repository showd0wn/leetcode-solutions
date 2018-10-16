class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        map = {}
        for i in nums:
            map[i] = map[i] + 1 if i in map else 1

        li = [None] * (len(nums) + 1)
        for key, value in map.items():
            if li[value] is not None:
                li[value].append(k)
            else:
                li[value] = [key]

        print(li)

        res = []
        while len(res) < k:
            last = li.pop()
            if last is None: continue
            res += last

        return res
