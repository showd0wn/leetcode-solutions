# topics = ["贪心算法"]

from typing import List


class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        res: List[List[int]] = []

        # 原数组按第一个元素降序，第二个元素升序
        people.sort(key=lambda ele: (-ele[0], ele[1]))

        # 按第二个元素插入排序
        for h, k in people:
            res.insert(k, [h, k])

        return res
