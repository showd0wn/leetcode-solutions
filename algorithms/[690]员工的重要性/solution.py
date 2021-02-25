# topics = ["哈希表", "深度优先搜索"]

from typing import List

"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""


class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates


class Solution:
    def getImportance(self, employees: List['Employee'], id: int) -> int:
        employees_dict = {e.id: e for e in employees}

        res = 0

        def dfs(k: int) -> None:
            nonlocal res
            employee = employees_dict.get(k)
            if not employee:
                return
            res += employee.importance
            for x in employee.subordinates:
                dfs(x)

        dfs(id)

        return res
