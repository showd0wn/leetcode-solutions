# topics = ["设计", "哈希表"]

from typing import List


class MyHashSet:
    """
    链地址法
    """

    def __init__(self):
        # 哈希表的大小，素数可以减少规律数据源的影响
        self.base = 769
        # 数组的每个位置是一个链表，相同哈希值的元素都放入这一链表当中
        self.data: List[List[int]] = [[] for _ in range(self.base)]

    # 哈希函数,将集合中任意可能的元素映射到一个固定范围的整数值
    def hash(self, key: int) -> int:
        return key % self.base

    def add(self, key: int) -> None:
        h = self.hash(key)
        if key in self.data[h]:
            return
        # 冲突处理
        self.data[h].append(key)

    def remove(self, key: int) -> None:
        h = self.hash(key)
        it = self.data[h]
        if key in it:
            it.remove(key)

    def contains(self, key: int) -> bool:
        h = self.hash(key)
        return key in self.data[h]


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
