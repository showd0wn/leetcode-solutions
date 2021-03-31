# topics = ["数组", "哈希表"]

from typing import List, Set, Tuple


class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        """
        广度优先搜索 & 哈希表
        """
        nums.sort()

        # 集合 set 的元素只能是不可变值
        s: Set[Tuple[int, ...]] = set()
        s.add(tuple())

        for num in nums:
            # 复制一个相同的集合进行循环，避免 RuntimeError: Set changed size during iteration
            # 结果同 s.update([t + (num,) for t in s])
            for t in s.copy():
                s.add(t + (num,))

        return list(map(list, s))
