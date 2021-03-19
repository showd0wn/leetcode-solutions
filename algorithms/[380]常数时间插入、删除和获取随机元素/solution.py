# topics = ["设计", "数组", "哈希表"]

from random import choice
from typing import Dict, List


class RandomizedSet:
    def __init__(self):
        # 数组存储元素值
        self.list: List[int] = []
        # 哈希表存储存储值到索引的映射
        self.dict: Dict[int, int] = {}

    def insert(self, val: int) -> bool:
        if val in self.dict:
            return False
        self.list.append(val)
        self.dict[val] = len(self.list) - 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.dict:
            return False

        idx = self.dict[val]
        n = len(self.list)

        if n > 1:
            #  将待删除数，交换到数组的末尾
            self.list[idx], self.list[-1] = self.list[-1], self.list[idx]
            self.dict[self.list[idx]] = idx

        self.list.pop()
        self.dict.pop(val)
        return True

    def getRandom(self) -> int:
        return choice(self.list)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
