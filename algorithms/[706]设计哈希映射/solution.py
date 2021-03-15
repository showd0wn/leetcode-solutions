# topics = ["哈希表"]

from typing import List


class MyHashMap:
    """
    链地址法
    """

    def __init__(self):
        """
        Initialize your data structure here.
        """
        # 哈希表的大小，素数可以减少规律数据源的影响
        self.base = 769
        # 数组的每个位置是一个链表，相同哈希值的元素都放入这一链表当中
        self.data: List[List[List[int]]] = [[] for _ in range(self.base)]

    # 哈希函数,将集合中任意可能的元素映射到一个固定范围的整数值
    def hash(self, key: int) -> int:
        return key % self.base

    def put(self, key: int, value: int) -> None:
        h = self.hash(key)
        it = self.data[h]
        for ele in it:
            if ele[0] == key:
                ele[1] = value
                return
        self.data[h].append([key, value])

    def get(self, key: int) -> int:
        h = self.hash(key)
        it = self.data[h]
        for ele in it:
            if ele[0] == key:
                return ele[1]
        return -1

    def remove(self, key: int) -> None:
        h = self.hash(key)
        it = self.data[h]
        for idx, ele in enumerate(it):
            if ele[0] == key:
                it.pop(idx)
                return


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
