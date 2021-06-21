# topics = ["设计", "树"]

from collections import defaultdict
from typing import DefaultDict, List, Set


class ThroneInheritance:
    def __init__(self, kingName: str):
        self.edges: DefaultDict[str, List[str]] = defaultdict(list)
        self.dead: Set[str] = set()
        self.king = kingName

    def birth(self, parentName: str, childName: str) -> None:
        self.edges[parentName].append(childName)

    def death(self, name: str) -> None:
        self.dead.add(name)

    def getInheritanceOrder(self) -> List[str]:
        """
        多叉树前序遍历
        time O(n), space O(n), n 为总人数
        """
        res: List[str] = []

        def preorder(name: str) -> None:
            if name not in self.dead:
                res.append(name)
            if name in self.edges:
                for childName in self.edges[name]:
                    preorder(childName)

        preorder(self.king)

        return res


# Your ThroneInheritance object will be instantiated and called as such:
# obj = ThroneInheritance(kingName)
# obj.birth(parentName,childName)
# obj.death(name)
# param_3 = obj.getInheritanceOrder()
