# topics = ["位运算", "哈希表"]

from collections import Counter
from typing import Dict, List


class Solution:
    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:
        # 暴力 超时
        ans: List[int] = []

        for puzzle in puzzles:
            cnt = 0
            pset = set(puzzle)
            first = puzzle[0]
            for wset in [set(word) for word in words]:
                if first in wset and pset & wset == wset:
                    cnt += 1
            ans.append(cnt)

        return ans

    def findNumOfValidWords2(self, words: List[str], puzzles: List[str]) -> List[int]:
        """
        二进制压缩状态
        time O(m|w| + n^(2|p|)), space O(m)
        m 和 n 分别为数组 words 和 puzzles 的长度, |w| 是 word 的最大长度 50, |p| 是 puzzle 的最大长度 7
        """
        frequency: Dict[int, int] = Counter()

        # 计算出每一个 word 对应的二进制数，存入计数字典
        for word in words:
            mask = 0
            for ch in word:
                # 使用一个长度为 26 的二进制数表示
                mask |= 1 << (ord(ch) - ord("a"))

            # 如果二进制数中包含的 1 的数量大于 7，那么它一定无法作为谜底
            if str(bin(mask)).count("1") <= 7:
                frequency[mask] += 1

        ans: List[int] = []
        for puzzle in puzzles:
            total = 0
            mask = 0
            for i in range(1, 7):
                mask |= 1 << (ord(puzzle[i]) - ord("a"))

            # 枚举二进制子集
            subset = mask
            while subset:
                s = subset | (1 << (ord(puzzle[0]) - ord("a")))
                if s in frequency:
                    total += frequency[s]
                subset = (subset - 1) & mask

            # 在枚举子集的过程中，要么会漏掉全集 mask，要么会漏掉空集
            # 这里会漏掉空集，因此需要额外判断空集
            if (1 << (ord(puzzle[0]) - ord("a"))) in frequency:
                total += frequency[1 << (ord(puzzle[0]) - ord("a"))]

            ans.append(total)

        return ans
