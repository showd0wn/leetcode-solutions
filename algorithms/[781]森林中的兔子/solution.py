# topics = ["哈希表"]

from math import ceil
from collections import Counter
from typing import Dict, List


class Solution:
    def numRabbits(self, answers: List[int]) -> int:
        d: Dict[int, int] = Counter(answers)

        res = 0
        for k, v in d.items():
            res += ceil(v / (k + 1)) * (k + 1)

        return res
