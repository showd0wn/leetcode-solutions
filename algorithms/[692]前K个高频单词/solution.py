# topics = ["数组", "堆"]

from __future__ import annotations
from collections import Counter
from typing import Dict, List
import heapq


class Word:
    def __init__(self, word: str, fre: int):
        self.word = word
        self.fre = fre

    def __lt__(self, other: Word):
        if self.fre != other.fre:
            return self.fre < other.fre
        return self.word > other.word


class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        """
        Hash Table & Heap
        time O(nlogk), space O(n), n 为数组的长度
        近似题 1738.找出第 K 大的异或坐标值
        """
        # 计数器
        c: Dict[str, int] = Counter(words)
        # 最小堆
        h: List[Word] = []

        for word, cnt in c.items():
            if len(h) < k:
                heapq.heappush(h, Word(word, cnt))
            else:
                heapq.heappushpop(h, Word(word, cnt))

        h.sort(reverse=True)
        return [w.word for w in h]
